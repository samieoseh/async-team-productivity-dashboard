import { useEffect, useState } from "react";
import supabase from "../supabase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import type { User } from "@supabase/supabase-js";
import { useUserStore } from "../store/user";

export default function useUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user: zustandUser } = useUserStore();

  useEffect(() => {
    async function fetchUser() {
      const result = await supabase.auth.getUser();

      if (result.error) {
        toast.error(
          result.error.message ?? "An error occured while fetching user"
        );
        navigate("/auth/sign-in");
      }

      if (result.data.user) {
        setUser(result.data.user);
      }

      setIsLoading(false);

      return result;
    }

    // try to get from zustand first
    if (!zustandUser) {
      fetchUser();
    }

    setUser(zustandUser);
  }, []);

  return {
    user,
    isLoading,
  };
}
