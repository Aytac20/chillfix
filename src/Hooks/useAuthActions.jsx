import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../utils/firebase";
import Loader from "../ui/Loader";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUp = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      toast.success("User created successfully");
      return userCredential.user.uid;
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError(err.message);
        toast.error("This email is already registered.");
      } else {
        setError(err.message);
        toast.error("Password should be at least 6 characters.");
      }

      return null;
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      toast.success("Signed in successfully");
      return userCredential?.user?.uid || null;
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-not-found":
        case "auth/wrong-password":
          toast.error("Invalid email or password. Please try again.");
          break;
        case "auth/too-many-requests":
          toast.error("Too many attempts. Please try again later.");
          break;
        default:
          toast.error("Something went wrong. Please try again.");
          break;
      }
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    currentUser,
    loading,
    error,
    signUp,
    signIn,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
