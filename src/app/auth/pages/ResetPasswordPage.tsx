import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  Paper,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  Lock as LockIcon,
  Visibility,
  VisibilityOff,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import supabase from "../../../shared/supabase";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type ResetPasswordData } from "../lib/reset-password-schema";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [resetSuccess, setResetSuccess] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ResetPasswordData) => {
    const result = await supabase.auth.updateUser({
      password: data.password,
    });

    if (result.error) {
      toast.error(
        result.error.message ?? "An error occured. Please try again."
      );
      return;
    }

    setResetSuccess(true);
  };

  const handleClickShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = (): void => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
  };

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
              bgcolor: resetSuccess ? "success.main" : "primary.main",
              borderRadius: "50%",
              p: 1.5,
              mb: 2,
            }}
          >
            {resetSuccess ? (
              <CheckCircleIcon sx={{ color: "white", fontSize: 32 }} />
            ) : (
              <LockIcon sx={{ color: "white", fontSize: 32 }} />
            )}
          </Box>
          <Typography component="h1" variant="h5" gutterBottom>
            {resetSuccess ? "Password Reset!" : "Reset Password"}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3, textAlign: "center" }}
          >
            {resetSuccess
              ? "Your password has been successfully reset"
              : "Enter your new password below"}
          </Typography>

          {resetSuccess ? (
            <Box sx={{ width: "100%" }}>
              <Alert severity="success" sx={{ mb: 3 }}>
                You can now sign in with your new password
              </Alert>
              <Button
                fullWidth
                variant="contained"
                component={RouterLink}
                to="/auth/sign-in"
                sx={{ py: 1.5 }}
              >
                Go to Sign In
              </Button>
            </Box>
          ) : (
            <Box component="form" sx={{ width: "100%" }}>
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    fullWidth
                    label="New Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="new-password"
                    error={!!error}
                    helperText={error?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
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
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    fullWidth
                    label="Confirm New Password"
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    autoComplete="new-password"
                    error={!!error}
                    helperText={error?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle confirm password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showConfirmPassword ? (
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

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, py: 1.5 }}
                disabled={isSubmitting}
                onClick={handleSubmit(onSubmit)}
              >
                {isSubmitting ? "Resetting..." : "Reset Password"}
              </Button>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Link component={RouterLink} to="/auth/sign-in" variant="body2">
                  Back to Sign In
                </Link>
              </Box>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  );
}
