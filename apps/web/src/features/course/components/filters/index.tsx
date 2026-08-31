import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Search, Filter } from 'lucide-react';

export interface CourseFiltersProps {
  filterType: 'All' | 'Free' | 'Premium';
  setFilterType: (val: 'All' | 'Free' | 'Premium') => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedStack: string;
  setSelectedStack: (val: string) => void;
  filterLabels: { all: string; free: string; premium: string; };
  stacks: string[];
}

export function CourseFilters({ filterType, setFilterType, searchQuery, setSearchQuery, selectedStack, setSelectedStack, filterLabels, stacks }: CourseFiltersProps) {
  return (
    <Box sx={{ 
      p: 2, mb: 6, borderRadius: '16px', bgcolor: 'background.paper', 
      border: '1px solid', borderColor: 'divider',
      display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3,
      alignItems: { xs: 'stretch', md: 'center' }, justifyContent: 'space-between' 
    }}>
      <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', pb: { xs: 1, md: 0 } }}>
        {(['All', 'Free', 'Premium'] as const).map((f) => (
          <Button
            key={f}
            variant={filterType === f ? 'contained' : 'outlined'}
            size="small"
            onClick={() => setFilterType(f)}
            color={filterType === f ? 'primary' : 'inherit'}
            sx={{ fontWeight: 700, borderRadius: '99px', px: 3, textTransform: 'none', whiteSpace: 'nowrap' }}
          >
            {f === 'All' ? filterLabels.all : f === 'Free' ? filterLabels.free : filterLabels.premium}
          </Button>
        ))}
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ flexGrow: 1, justifyContent: 'flex-end' }}>
        <Select
          size="small"
          value={selectedStack}
          onChange={(e: SelectChangeEvent) => setSelectedStack(e.target.value)}
          displayEmpty
          IconComponent={() => <Filter size={16} style={{ marginRight: 12, opacity: 0.5 }} />}
          sx={{ minWidth: 200, borderRadius: '12px', fontWeight: 600 }}
        >
          {stacks.map((stack) => (
            <MenuItem key={stack} value={stack} sx={{ fontWeight: 600 }}>
              {stack === 'All' ? 'All Stacks' : stack}
            </MenuItem>
          ))}
        </Select>
        <TextField
          size="small"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={18} />
                </InputAdornment>
              ),
            }
          }}
          sx={{ minWidth: 260, '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
        />
      </Stack>
    </Box>
  );
}
