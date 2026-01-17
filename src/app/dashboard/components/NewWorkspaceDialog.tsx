import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import NewWorkspaceForm from "./NewWorkspaceForm";

export interface NewWorkspaceDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function NewWorkspaceDialog(props: NewWorkspaceDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth>
      <DialogTitle>Create a new workspace</DialogTitle>

      <DialogContent>
        <NewWorkspaceForm />
      </DialogContent>
    </Dialog>
  );
}
