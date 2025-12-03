// =====================================================
// PÁGINA: AUTENTICACIÓN (AUTHENTICATION)
// =====================================================
// Esta es la página principal de autenticación que contiene:
//   - Formulario de inicio de sesión (SignInForm)
//   - Formulario de registro (SignUpForm)
// 
// INTERACCIÓN CON OTROS ARCHIVOS:
//   1. SignInForm -> firebase.utils.js -> Firebase Auth/Firestore
//   2. SignUpForm -> firebase.utils.js -> Firebase Auth/Firestore
//   3. Ambos componentes comparten las mismas funciones de firebase.utils.js

// =====================================================
// CÓDIGO COMENTADO: MÉTODO DE AUTENTICACIÓN CON POPUP
// =====================================================
// Este código está comentado porque la funcionalidad de Google Sign-In
// ahora está integrada dentro del componente SignInForm
// Se deja como referencia para entender cómo funciona el popup
// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   // signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import { auth } from "../../utils/firebase/firebase.utils";

import "./authentication.styles.scss";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authtentication = () => {

  // =====================================================
  // ESTRUCTURA DE LA PÁGINA
  // =====================================================
  // Esta página simplemente renderiza dos componentes lado a lado:
  //   - SignInForm: Para usuarios que ya tienen cuenta
  //   - SignUpForm: Para usuarios nuevos que quieren registrarse
  // 
  // Toda la lógica de autenticación está en los componentes hijos,
  // manteniendo este componente simple y enfocado en el layout

  // ============ MÉTODO 1: POPUP (COMENTADO) ============
  // Más simple y directo. Abre una ventana emergente de Google.
  // Retorna inmediatamente el usuario autenticado.
  // const logGoogleUser = async () => {
  //   try {
  //     const { user } = await signInWithGooglePopup();
  //     await createUserDocumentFromAuth(user);
  //     console.log("Usuario con popup:", user);
  //   } catch (error) {
  //     if (error.code === 'auth/popup-closed-by-user') {
  //       console.log('Usuario cerró el popup de autenticación');
  //     } else {
  //       console.error('Error al autenticar:', error);
  //     }
  //   }
  // };

  // ============ MÉTODO 2: REDIRECT ============
  // Redirige a la página de Google y vuelve después de autenticar.
  // Necesita useEffect para capturar el resultado cuando regresa.
  // NOTA: Puede tener problemas con CORS en desarrollo local.
  // useEffect(() => {
  //   const fetchRedirectResult = async () => {
  //     try {
  //       const response = await getRedirectResult(auth);
  //       console.log("Respuesta de redirect:", response);
  //       if (response) {
  //         await createUserDocumentFromAuth(response.user);
  //         console.log("Usuario autenticado con redirect:", response.user);
  //       } else {
  //         console.log("No hay redirección pendiente");
  //       }
  //     } catch (error) {
  //       console.error("Error en redirect:", error);
  //     }
  //   };
  //   fetchRedirectResult();
  // }, []);

  return (
    <div className="authentication-container">
      {/* =====================================================
          BOTONES DE AUTENTICACIÓN COMENTADOS
          ===================================================== 
          Estos botones están comentados porque ahora el botón
          de Google Sign-In está integrado dentro de SignInForm
          Se dejan como referencia de implementación alternativa
      */}
      {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      
      {/* =====================================================
          COMPONENTES PRINCIPALES
          ===================================================== */}
      {/* SignInForm: Formulario de inicio de sesión (lado izquierdo) */}
      <SignInForm/>
      
      {/* SignUpForm: Formulario de registro (lado derecho) */}
      <SignUpForm/>
    </div>
  );
};

export default Authtentication;
