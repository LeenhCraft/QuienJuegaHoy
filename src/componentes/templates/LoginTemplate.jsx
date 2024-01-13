import styled from "styled-components";
import {v, useAuthStore} from "../../index.js";

export function LoginTemplate() {
  const {signInWithGoogle} = useAuthStore();
  return (
    <Container className="flex">
      <div className="bg-white rounded-lg shadow-lg m-auto p-5 xl:mt-10 xl:max-w-[550px]">
        <div className="mb-4">
          <h1 className="text-center text-2xl font-bold">Iniciar sesión en</h1>
          <h2 className="text-center text-2xl font-bold text-blue-500 mb-4">
            Quien Juega?
          </h2>
          <p className="text-center text-base text-gray-400 leading-4">
            Crea una nueva cuenta o inicia sesión con tu cuenta de Google.
          </p>
        </div>
        <div className="border rounded-lg p-2">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <img src={v.logoGoogle} alt="google" className="w-6 h-6 mr-2" />
              <a
                className="text-base font-normal"
                href="#"
                onClick={signInWithGoogle}
              >
                Iniciar sesión con Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
