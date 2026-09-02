import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { OverviewTab } from './OverviewTab';
import { NotesTab } from './NotesTab';
import { ResourcesTab } from './ResourcesTab';
import { ReviewFeedbackTab } from './ReviewFeedbackTab';
import { QAndATab } from './QAndATab';

interface PlayerTabsProps {
  activeTab: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  resources: any[];
}

export function PlayerTabs({ activeTab, onTabChange, resources }: PlayerTabsProps) {
  return (
    <>
      <Tabs value={activeTab} onChange={onTabChange} sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
        <Tab label="Overview" sx={{ fontWeight: 700 }} />
        <Tab label="Notes" sx={{ fontWeight: 700 }} />
        <Tab label="Downloads & Resources" sx={{ fontWeight: 700 }} />
        <Tab label="Reviews & Feedback" sx={{ fontWeight: 700 }} />
        <Tab label="Q&A Discussions" sx={{ fontWeight: 700 }} />
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
