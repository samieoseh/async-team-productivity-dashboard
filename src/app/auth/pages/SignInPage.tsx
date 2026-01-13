import toast from "react-hot-toast";
import supabase from "../../../shared/supabase";
import SignIn from "../components/ui/SignIn";
import type { SignInData } from "../lib/signin-schema";
import { useNavigate } from "react-router";
import { useUserStore } from "../../../shared/store/user";

export default function SignInPage() {
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const handleSubmit = async (data: SignInData) => {
    const result = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (result.error) {
      toast.error(
        result.error.message ?? "An error occured. Please try again."
      );
      return;
    }

    setUser(result.data.user!);
    toast.success("Successfully signed in.");

    navigate("/");
  };

  const handleGoogleSignIn = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const handleGitHubSignIn = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  return (
    <SignIn
      onSubmit={handleSubmit}
      handleGitHubSignIn={handleGitHubSignIn}
      handleGoogleSignIn={handleGoogleSignIn}
    />
  );
}
