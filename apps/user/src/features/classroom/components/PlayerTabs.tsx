import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { OverviewTab } from './OverviewTab';
import { NotesTab } from './NotesTab';
import { ResourcesTab } from './ResourcesTab';
import { ReviewFeedbackTab } from './ReviewFeedbackTab';
import { QAndATab } from './QAndATab';
import { brand } from '@repo/ui/shared-theme/themePrimitives';

interface PlayerTabsProps {
  activeTab: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  resources: any[];
}

export function PlayerTabs({ activeTab, onTabChange, resources }: PlayerTabsProps) {
  return (
    <>
      <Tabs 
        value={activeTab} 
        onChange={onTabChange} 
        variant="scrollable"
        scrollButtons="auto"
        sx={{ 
          borderBottom: '1px solid', 
          borderColor: 'divider', 
          bgcolor: 'background.default',
          minHeight: 48,
          '& .MuiTabs-indicator': {
            height: 3,
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
            bgcolor: brand[500],
          }
        }}
      >
        <Tab label="Execution Log" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, fontSize: '0.75rem', minHeight: 48 }} />
        <Tab label="Notebook Context" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, fontSize: '0.75rem', minHeight: 48 }} />
        <Tab label="Assets & Data" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, fontSize: '0.75rem', minHeight: 48 }} />
        <Tab label="Peer Review" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, fontSize: '0.75rem', minHeight: 48 }} />
        <Tab label="Discussion Channel" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, fontSize: '0.75rem', minHeight: 48 }} />
      </Tabs>
      <Box sx={{ p: 4, minHeight: 300, bgcolor: 'background.paper' }}>
        {activeTab === 0 ? <OverviewTab /> : null}
        {activeTab === 1 ? <NotesTab /> : null}
        {activeTab === 2 ? <ResourcesTab resources={resources} /> : null}
        {activeTab === 3 ? <ReviewFeedbackTab /> : null}
        {activeTab === 4 ? <QAndATab /> : null}
      </Box>
    </>
  );
}
