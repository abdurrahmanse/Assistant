import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { useCheckoutQuery } from '../hooks/queries/useCheckoutQuery';

interface InfoProps {
  totalPrice: string;
}

export default function Info({ totalPrice }: InfoProps) {
  const { data, isLoading } = useCheckoutQuery();

  if (isLoading || !data) {
    return (
      <React.Fragment>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
          Membership Due
        </Typography>
        <Typography variant="h4" gutterBottom>
          {totalPrice}
        </Typography>
        <List disablePadding>
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} variant="rectangular" width="100%" height={40} sx={{ mb: 2 }} />
          ))}
        </List>
      </React.Fragment>
    );
  }

  const { products } = data;

  return (
    <React.Fragment>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
        Membership Due
      </Typography>
      <Typography variant="h4" gutterBottom>
        {totalPrice}
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={product.desc}
            />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
