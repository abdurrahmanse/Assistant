import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Plyr } from 'plyr-react';
import 'plyr-react/plyr.css';

interface VideoPlayerProps {
  currentLesson: any;
}

export function VideoPlayer({ currentLesson }: VideoPlayerProps) {
  return (
    <Box sx={{ 
      width: '100%', 
      aspectRatio: '16/9', 
      bgcolor: 'black', 
      borderRadius: '16px',
      overflow: 'hidden',
      mb: 4,
      boxShadow: '8px 8px 0px rgba(0,0,0,1)', border: '4px solid #000',
      '& .plyr': {
        height: '100%',
        '--plyr-color-main': '#6366f1', // primary color
      }
    }}>
      {currentLesson?.videoUrl ? (
        <Plyr
          source={{
            type: 'video',
            sources: [{ src: currentLesson.videoUrl, provider: 'html5' }],
          }}
          options={{
            autoplay: true,
            controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
          }}
        />
      ) : (
        <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          <Typography variant="h6">No video available for this lesson type.</Typography>
        </Box>
      )}
    </Box>
  );
}

