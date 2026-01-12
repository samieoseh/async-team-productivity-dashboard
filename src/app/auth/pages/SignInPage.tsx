import SignIn from "../components/ui/SignIn";
import type { SignInData } from "../lib/signin-schema";

export default function SignInPage() {
  const handleSubmit = (data: SignInData) => {
    console.log({ data });
    // TODO: Add sign-in logic here
  };

  const handleGoogleSignIn = () => {
    // TODO: Implement Google OAuth sign-in
  };

  const handleGitHubSignIn = () => {
    // TODO: Implement GitHub OAuth sign-in
  };

  return (
    <SignIn
      onSubmit={handleSubmit}
      handleGitHubSignIn={handleGitHubSignIn}
      handleGoogleSignIn={handleGoogleSignIn}
    />
  );
}
