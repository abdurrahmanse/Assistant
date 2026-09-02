import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { Play, Square, Timer, TimerReset, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { brand } from '@repo/ui/shared-theme/themePrimitives';

export function PomodoroWidget() {
  const DEFAULT_TIME = 25 * 60;
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(DEFAULT_TIME);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((DEFAULT_TIME - timeLeft) / DEFAULT_TIME) * 100;

  return (
    <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: '16px', border: '1px solid', borderColor: 'divider', mb: 3 }}>
      <Stack direction="row" alignItems="center" gap={1} mb={2}>
        <Terminal size={18} color={brand[400]} />
        <Typography variant="subtitle2" fontWeight={600} color="text.secondary">
          EXECUTION TIMER
        </Typography>
      </Stack>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
        <Typography variant="h3" fontWeight={700} sx={{ letterSpacing: '-0.05em', color: brand[500] }}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          {isRunning ? "Kernel active..." : "Ready to execute?"}
        </Typography>
      </Box>

      <LinearProgress 
        variant="determinate" 
        value={progress} 
        sx={{ mb: 3, height: 4, borderRadius: 2, bgcolor: 'divider', '& .MuiLinearProgress-bar': { bgcolor: brand[500] } }} 
      />

      <Stack direction="row" spacing={1}>
        <Button 
          variant={isRunning ? "outline" : "primary"} 
          fullWidth 
          onClick={toggleTimer}
          startIcon={isRunning ? <Square size={16} /> : <Play size={16} />}
          sx={isRunning ? { borderColor: 'error.main', color: 'error.main', '&:hover': { bgcolor: 'error.50' } } : {}}
        >
          {isRunning ? 'Halt' : 'Run'}
        </Button>
        <Button variant="outline" onClick={resetTimer} sx={{ px: 2 }}>
          <TimerReset size={16} />
        </Button>
      </Stack>
    </Box>
  );
}
