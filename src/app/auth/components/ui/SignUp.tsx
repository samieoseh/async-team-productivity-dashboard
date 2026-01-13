import {
  Box,
  Button,
  Container,
  Grid,
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
  PersonAdd as PersonAddIcon,
  VisibilityOff,
  Visibility,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router";
import type { SignUpData } from "../../lib/signup-schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../lib/signup-schema";
import { useState } from "react";

interface SignUpProps {
  onSubmit: ({ email, password }: SignUpData) => Promise<void>;
  handleGoogleSignUp: () => void;
  handleGitHubSignUp: () => void;
}

export default function SignUp({
  onSubmit,
  handleGoogleSignUp,
  handleGitHubSignUp,
}: SignUpProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (data: SignUpData) => {
    setLoading(true);
    try {
      await onSubmit(data);
    } finally {
      setLoading(false);
    }
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  return (
    <Container component="main" maxWidth="sm">
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
            <PersonAddIcon sx={{ color: "white", fontSize: 32 }} />
          </Box>
          <Typography component="h1" variant="h5" gutterBottom>
            Sign Up
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Create your account to get started
          </Typography>

          <Box component="form" sx={{ width: "100%" }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      fullWidth
                      id="firstName"
                      value={field.value}
                      label="First Name"
                      autoFocus
                      error={!!error}
                      helperText={error ? error.message : ""}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      name="lastName"
                      required
                      value={field.value}
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      autoFocus
                      error={!!error}
                      helperText={error ? error.message : ""}
                    />
                  )}
                />
              </Grid>
              <Grid size={12}>
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
                      value={field.value}
                      label="Email Address"
                      autoComplete="email"
                      autoFocus
                      error={!!error}
                      helperText={error ? error.message : ""}
                    />
                  )}
                />
              </Grid>
              <Grid size={12}>
                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      value={field.value}
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.5 }}
              onClick={handleSubmit(handleSignUp)}
              disabled={loading}
              startIcon={
                loading ? <CircularProgress size={20} color="inherit" /> : null
              }
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>

            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <Link component={RouterLink} to="/auth/sign-in" variant="body2">
                Already have an account? Sign In
              </Link>
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
              onClick={handleGoogleSignUp}
              sx={{ mb: 1, py: 1 }}
            >
              Sign up with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GitHubIcon />}
              onClick={handleGitHubSignUp}
              sx={{ py: 1 }}
            >
              Sign up with GitHub
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
