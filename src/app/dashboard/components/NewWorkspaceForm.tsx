import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { schema, type NewWorkspaceData } from "../lib/new-workspace-schema";
import { useEffect } from "react";
import { generateSlug } from "../../../shared/utils/common";
import { useCreateWorkspace } from "../../../shared/hooks/workspace.hook";

export default function NewWorkspaceForm() {
  const { control, handleSubmit, watch, setValue, reset } = useForm({
    defaultValues: {
      name: "",
      slug: "",
      description: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });
  const createWorkspaceMutation = useCreateWorkspace();

  const handleCreateWorkspace = (values: NewWorkspaceData) => {
    createWorkspaceMutation.mutate(values, {
      onSuccess: () => {
        reset();
      },
    });
  };

  const name = watch("name");

  useEffect(() => {
    if (name) {
      setValue("slug", generateSlug(name), { shouldValidate: true });
    }
  }, [name, setValue]);

  return (
    <Box component="form" sx={{ width: "100%" }}>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            variant="outlined"
            id="name"
            value={field.value}
            label="Workspace name"
            autoFocus
            error={!!error}
            helperText={error ? error.message : ""}
          />
        )}
      />
      <Controller
        name="slug"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            variant="outlined"
            id="slug"
            value={field.value}
            label="Workspace slug"
            error={!!error}
            helperText={
              error ? error.message : "Lowercase, URL-safe identifier"
            }
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            multiline
            minRows={3}
            variant="outlined"
            id="description"
            value={field.value ?? ""}
            label="Description"
            error={!!error}
            helperText={
              error ? error.message : "Optional context for your workspace"
            }
          />
        )}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 2, py: 1.5 }}
        onClick={handleSubmit(handleCreateWorkspace)}
        disabled={createWorkspaceMutation.isPending}
        startIcon={
          createWorkspaceMutation.isPending ? (
            <CircularProgress size={20} color="inherit" />
          ) : null
        }
      >
        {createWorkspaceMutation.isPending
          ? "Please wait..."
          : "Create workspace"}
      </Button>
    </Box>
  );
}
