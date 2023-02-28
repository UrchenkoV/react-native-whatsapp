import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { auth, login, logout } from "./utils/firebase";

export const useAuth = () => {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onLogin = async ({ email, password }) => {
    try {
      setIsLoading(true);
      setError("");
      await login({ email, password });
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unSub();
  }, []);

  const values = React.useMemo(
    () => ({
      user,
      onLogin,
      logout,
      error,
      isLoading,
    }),
    [user, isLoading, error]
  );

  return values;
};
