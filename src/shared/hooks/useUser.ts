import { useEffect, useState } from "react";
import supabase from "../supabase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import type { User } from "@supabase/supabase-js";
import { useUserStore } from "../store/user";

export default function useUser() {
  const navigate = useNavigate();
  const { user: zustandUser, setUser: setZustandUser } = useUserStore();

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(zustandUser || null);

  useEffect(() => {
    // If Zustand already has user, we’re done
    if (zustandUser) {
      setIsLoading(false);
      return;
    }

    // Otherwise, fetch from Supabase
    async function fetchUser() {
      try {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
          toast.error(error.message ?? "Error fetching user");
          navigate("/auth/sign-in", { replace: true });
          return;
        }

        if (data.user) {
          setUser(data.user);
          setZustandUser(data.user); // cache in Zustand
        } else {
          navigate("/auth/sign-in", { replace: true });
        }
      } catch (err) {
        toast.error("Unexpected error fetching user");
        navigate("/auth/sign-in", { replace: true });
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, [navigate, setZustandUser, zustandUser]);

  return { user, isLoading };
}
