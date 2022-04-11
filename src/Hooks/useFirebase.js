import { React, useEffect, useState } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "./../Private/Firebase.config";

const useFirebase = () => {
  const auth = getAuth(app);
  let navigate = useNavigate();
  let location = useLocation();
  const GoogleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState("");

  const signInWithGoogle = () => {
    console.log("hello");
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/home", { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // Register with email and password

  const signUpWithEmailAndPass = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateUserName(name);
        veryfayUserEmail();
        const user = userCredential.user;
        setUser(user);
        navigate("/home", { replace: true });
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  // login with email and password

  const signInWithEmailAndPassword = (name, email, password) => {
    console.log(name, email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // update user name
  const updateUserName = (name) => {
    console.log(name);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error.message);
      });
  };

  // very email
  const veryfayUserEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      // ...
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {});
  };

  return {
    signInWithGoogle,
    signUpWithEmailAndPass,
    signInWithEmailAndPassword,
    user,
    handleLogOut,
  };
};

export default useFirebase;
