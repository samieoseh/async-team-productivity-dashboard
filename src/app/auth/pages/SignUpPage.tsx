import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import {
  Google as GoogleIcon,
  GitHub as GitHubIcon,
  PersonAdd as PersonAddIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router";

export default function SignUpPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Add sign-up logic here
  };

  const handleGoogleSignUp = () => {
    // TODO: Implement Google OAuth sign-up
  };

  const handleGitHubSignUp = () => {
    // TODO: Implement GitHub OAuth sign-up
  };

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

          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  // TODO: Add value and onChange handler
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  // TODO: Add value and onChange handler
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  // TODO: Add value and onChange handler
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  // TODO: Add value and onChange handler
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  // TODO: Add value and onChange handler for password confirmation
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.5 }}
            >
              Sign Up
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
