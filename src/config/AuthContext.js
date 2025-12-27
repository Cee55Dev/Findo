import React, { createContext, useState, useEffect, useContext } from "react";
import { auth, db } from "./firebase";
import { updateProfile } from "firebase/auth";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

// Create context
export const AuthContext = createContext();

// Custom hook for easier use in components
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen to auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Sign up function
  const signUp = async (email, password, displayName) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (displayName) {
      await updateProfile(user, { displayName });
    }

    await setDoc(doc(db, "users", user.uid), {
      displayName: displayName || null,
      email: user.email,
      liked: [],
      saved: [],
      createdAt: serverTimestamp()
    });

    return user;
  };

  // Login function
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // Logout function
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, loading, signUp, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
