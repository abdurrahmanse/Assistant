import * as React from 'react';
import { type OpenDialog, type CloseDialog } from '@/features/crud/hooks/useDialogs/useDialogs';

const DialogsContext = React.createContext<{
  open: OpenDialog;
  close: CloseDialog;
} | null>(null);

export default DialogsContext;
