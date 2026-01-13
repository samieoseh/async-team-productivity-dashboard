import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  Paper,
  Alert,
} from "@mui/material";
import {
  Email as EmailIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type ForgotPasswordData } from "../lib/forgot-password-schema";
import supabase from "../../../shared/supabase";
import toast from "react-hot-toast";

export default function ForgotPasswordPage() {
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [submittedEmail, setSubmittedEmail] = useState<string>("");

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ForgotPasswordData) => {
    const result = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: "http://localhost:5173/auth/reset-password",
    });

    if (result.error) {
      toast.error(
        result.error.message ?? "An error occured. Please try again."
      );
      return;
    }

    setSubmittedEmail(data.email);
    setEmailSent(true);
  };

  const handleResendEmail = async (): Promise<void> => {
    const result = await supabase.auth.resetPasswordForEmail(submittedEmail, {
      redirectTo: "http://localhost:5173/auth/reset-password",
    });

    if (result.error) {
      toast.error(
        result.error.message ?? "An error occured. Please try again."
      );
      return;
    }

    toast.success("Password reset link has been resent.");
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
              bgcolor: "primary.main",
              borderRadius: "50%",
              p: 1.5,
              mb: 2,
            }}
          >
            <EmailIcon sx={{ color: "white", fontSize: 32 }} />
          </Box>
          <Typography component="h1" variant="h5" gutterBottom>
            Forgot Password?
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3, textAlign: "center" }}
          >
            {emailSent
              ? "Check your email for a password reset link"
              : "Enter your email address and we'll send you a link to reset your password"}
          </Typography>

          {emailSent ? (
            <Box sx={{ width: "100%" }}>
              <Alert severity="success" sx={{ mb: 3 }}>
                A password reset link has been sent to{" "}
                <strong>{submittedEmail}</strong>
              </Alert>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2, textAlign: "center" }}
              >
                Didn't receive the email?
              </Typography>
              <Button
                fullWidth
                variant="outlined"
                onClick={handleResendEmail}
                sx={{ mb: 2 }}
              >
                Resend Email
              </Button>
              <Button
                fullWidth
                variant="text"
                startIcon={<ArrowBackIcon />}
                component={RouterLink}
                to="/auth/sign-in"
              >
                Back to Sign In
              </Button>
            </Box>
          ) : (
            <Box component="form" sx={{ width: "100%" }}>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    fullWidth
                    value={field.value}
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                    error={!!error}
                    helperText={error?.message}
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
                {isSubmitting ? "Sending..." : "Send Reset Link"}
              </Button>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Link
                  component={RouterLink}
                  to="/auth/sign-in"
                  variant="body2"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <ArrowBackIcon fontSize="small" />
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
