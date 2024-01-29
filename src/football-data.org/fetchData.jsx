import axios from "axios";

const getSuspender = (promise) => {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return {read};
};

export const fetchData = (url, options) => {
  // const promise = fetch(url, options)
  //   .then((response) => response.json())
  //   .then((json) => json);

  const promise = axios(url, options).then((response) => response.data);

  return getSuspender(promise);
};
