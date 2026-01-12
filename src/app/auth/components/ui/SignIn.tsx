import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  Paper,
  Divider,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import {
  Google as GoogleIcon,
  GitHub as GitHubIcon,
  Lock as LockIcon,
  VisibilityOff,
  Visibility,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { schema } from "../../lib/signin-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export default function SignIn({
  onSubmit,
  handleGoogleSignIn,
  handleGitHubSignIn,
}: {
  onSubmit: ({ email, password }: { email: string; password: string }) => void;
  handleGoogleSignIn: any;
  handleGitHubSignIn: any;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (data: { email: string; password: string }) => {
    setLoading(true);
    try {
      await onSubmit(data);
    } finally {
      setLoading(false);
    }
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              bgcolor: "primary.main",
              borderRadius: "50%",
              p: 1.5,
              mb: 2,
            }}
          >
            <LockIcon sx={{ color: "white", fontSize: 32 }} />
          </Box>
          <Typography component="h1" variant="h5" gutterBottom>
            Sign In
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Welcome back! Please sign in to your account
          </Typography>

          <Box component="form" sx={{ width: "100%" }}>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  error={!!error}
                  helperText={error ? error.message : ""}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  label="Password"
                  error={!!error}
                  helperText={error ? error.message : ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              onClick={handleSubmit(handleSignIn)}
              sx={{ mt: 3, mb: 2, py: 1.5 }}
              disabled={loading}
              startIcon={
                loading ? <CircularProgress size={20} color="inherit" /> : null
              }
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
                flexDirection: "column",
              }}
            >
              <Link href="#" variant="body2">
                {/* TODO: Add forgot password functionality */}
                Forgot password?
              </Link>
              <Typography
                variant="body2"
                color="primary"
                className="text-center"
                mt={2}
              >
                Don't have an account?{" "}
                <Link component={RouterLink} to="/auth/sign-up" variant="body2">
                  Sign Up
                </Link>
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }}>
              <Typography variant="body2" color="text.secondary">
                OR
              </Typography>
            </Divider>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleSignIn}
              sx={{ mb: 1, py: 1 }}
            >
              Continue with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GitHubIcon />}
              onClick={handleGitHubSignIn}
              sx={{ py: 1 }}
            >
              Continue with GitHub
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
