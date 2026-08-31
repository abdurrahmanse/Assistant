import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ChevronLeft, ArrowRight } from "lucide-react";
import AddressForm from './AddressForm';
import InfoMobile from './InfoMobile';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { OrderSuccess } from './OrderSuccess';
import { CheckoutStepper } from './CheckoutStepper';
import { useCheckoutQuery } from '../hooks/queries/useCheckoutQuery';
import Skeleton from '@mui/material/Skeleton';

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function CheckoutFlow() {
  const { data, isLoading } = useCheckoutQuery();
  const [activeStep, setActiveStep] = React.useState(0);
  
  if (isLoading || !data) {
    return <Skeleton variant="rectangular" width="100%" height={500} />;
  }

  const { ui } = data;
  const { steps, buttons, labels } = ui;
  
  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);
  
  const totalPrice = activeStep >= 2 ? '$144.97' : '$134.98';

  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { sm: 'space-between', md: 'flex-end' },
          alignItems: 'center',
          width: '100%',
          maxWidth: { sm: '100%', md: 600 },
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexGrow: 1,
          }}
        >
          <CheckoutStepper activeStep={activeStep} steps={steps} isMobile={false} />
        </Box>
      </Box>
      <Card sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}>
        <CardContent
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <Typography variant="subtitle2" gutterBottom>
              {labels.selectedProducts}
            </Typography>
            <Typography variant="body1">
              {totalPrice}
            </Typography>
          </div>
          <InfoMobile totalPrice={totalPrice} />
        </CardContent>
      </Card>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          width: '100%',
          maxWidth: { sm: '100%', md: 600 },
          maxHeight: '720px',
          gap: { xs: 5, md: 'none' },
        }}
      >
        <CheckoutStepper activeStep={activeStep} steps={steps} isMobile={true} />
        
        {activeStep === steps.length ? (
          <OrderSuccess />
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box
              sx={[
                {
                  display: 'flex',
                  flexDirection: { xs: 'column-reverse', sm: 'row' },
                  alignItems: 'end',
                  flexGrow: 1,
                  gap: 1,
                  pb: { xs: 12, sm: 0 },
                  mt: { xs: 2, sm: 0 },
                  mb: '60px',
                },
                activeStep !== 0
                  ? { justifyContent: 'space-between' }
                  : { justifyContent: 'flex-end' },
              ]}
            >
              {activeStep !== 0 && (
                <Button
                  startIcon={<ChevronLeft size={18} />}
                  onClick={handleBack}
                  variant="text"
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                >
                  {buttons.previous}
                </Button>
              )}
              {activeStep !== 0 && (
                <Button
                  startIcon={<ChevronLeft size={18} />}
                  onClick={handleBack}
                  variant="outlined"
                  fullWidth
                  sx={{ display: { xs: 'flex', sm: 'none' } }}
                >
                  {buttons.previous}
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                startIcon={<ArrowRight size={18} />}
              >
                {activeStep === steps.length - 1 ? buttons.placeOrder : buttons.next}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </React.Fragment>
  );
}
