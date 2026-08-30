import { X, ChevronDown } from 'lucide-react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Info from '@/features/checkout/components/Info';

interface InfoProps {
  totalPrice: string;
}

export default function InfoMobile({ totalPrice }: InfoProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 'auto', px: 3, pb: 3, pt: 8 }} role="presentation">
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{ position: 'absolute', right: 8, top: 8 }}
      >
        <X size={20}  />
      </IconButton>
      <Info totalPrice={totalPrice} />
    </Box>
  );

  return (
    <div>
      <Button
        variant="text"
        endIcon={<ChevronDown size={20}  />}
        onClick={toggleDrawer(true)}
      >
        View details
      </Button>
      <Drawer
        open={open}
        anchor="top"
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              top: 'var(--template-frame-height, 0px)',
              backgroundImage: 'none',
              backgroundColor: 'background.paper',
            },
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
