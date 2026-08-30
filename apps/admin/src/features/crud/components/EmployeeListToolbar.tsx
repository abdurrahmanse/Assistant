import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { Plus } from "lucide-react";

interface EmployeeListToolbarProps {
  onRefresh: () => void;
  onCreate: () => void;
}

export function EmployeeListToolbar({ onRefresh, onCreate }: EmployeeListToolbarProps) {
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <Tooltip title="Reload data" placement="right" enterDelay={1000}>
        <div>
          <IconButton size="small" aria-label="refresh" onClick={onRefresh}>
          </IconButton>
        </div>
      </Tooltip>
      <Button
        variant="contained"
        onClick={onCreate}
        startIcon={<Plus />}
      >
        Create
      </Button>
    </Stack>
  );
}
