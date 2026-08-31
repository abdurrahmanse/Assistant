import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Search as SearchIcon } from 'lucide-react';
import { useLayoutQuery } from '@/features/layout/hooks/queries/useLayoutQuery';

export default function Search() {
  const { data } = useLayoutQuery();
  const placeholder = data?.header?.searchPlaceholder || 'Search...';

  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder={placeholder}
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchIcon size={20} />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}
