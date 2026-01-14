import toast from "react-hot-toast";
import supabase from "../../../shared/supabase";
import SignUp from "../components/ui/SignUp";
import type { SignUpData } from "../lib/signup-schema";
import { useNavigate } from "react-router";
import { useUserStore } from "../../../shared/store/user";

export default function SignUpPage() {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const handleSubmit = async (data: SignUpData) => {
    const result = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: { data: { display_name: data.firstName + " " + data.lastName } },
    });

    if (result.error) {
      toast.error(
        result.error.message ?? "An error occured. Please try again."
      );
      return;
    }

    setUser(result.data.user!);
    toast.success("Successfully signed up.");

    supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    navigate("/dashboard");
  };

  const handleGoogleSignUp = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const handleGitHubSignUp = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  return (
    <SignUp
      onSubmit={handleSubmit}
      handleGitHubSignUp={handleGitHubSignUp}
      handleGoogleSignUp={handleGoogleSignUp}
    />
  );
}
