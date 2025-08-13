import { createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

import auth from "../firebase/firebase.config";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() => setLoading(false));
  };

  const handleGitHubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider).finally(() => setLoading(false));
  };

  const handleTwitterLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider).finally(() => setLoading(false));
  };

  const handleLogOut = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).finally(() => setLoading(false));
  };

  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL,
    });
  };

  const handleSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    loading,
    createUser,
    updateUserProfile,
    handleGoogleLogin,
    handleGitHubLogin,
    handleTwitterLogin,
    handleLogOut,
    handleSignIn,
  };

  return <authContext.Provider value={authData}>{children}</authContext.Provider>;
};

export default AuthProvider;
