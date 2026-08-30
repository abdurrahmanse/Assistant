 
import * as React from 'react';
import Divider from '@mui/material/Divider';
import type {} from '@mui/material/themeCssVarsAugmentation';
import DashboardSidebarContext from '@/layouts/CrudLayout/context/DashboardSidebarContext';
import getDrawerSxTransitionMixin from '@/features/crud/mixins';

export default function DashboardSidebarDividerItem() {
  const sidebarContext = React.useContext(DashboardSidebarContext);
  if (!sidebarContext) {
    throw new Error('Sidebar context was used without a provider.');
  }
  const { fullyExpanded = true, hasDrawerTransitions } = sidebarContext;

  return (
    <li>
      <Divider
        sx={[
          {
            borderBottomWidth: 1,
            my: 1,
            mx: -0.5,
          },
          hasDrawerTransitions
            ? getDrawerSxTransitionMixin(fullyExpanded, 'margin')
            : null,
        ]}
      />
    </li>
  );
}
