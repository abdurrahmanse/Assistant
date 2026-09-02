import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { APITypes } from 'plyr-react';
import { Plyr } from 'plyr-react';
import 'plyr-react/plyr.css';
import { useEffect, useRef } from 'react';

import type { CourseLesson } from '@/interfaces';

interface VideoPlayerProps {
  currentLesson: CourseLesson;
  onVideoEnd?: () => void;
}

export function VideoPlayer({ currentLesson, onVideoEnd }: VideoPlayerProps) {
  const playerRef = useRef<APITypes>(null);

  useEffect(() => {
    const player = playerRef.current?.plyr as any;
    if (player && onVideoEnd) {
      const handleEnded = () => {
        onVideoEnd();
      };
      
      if (typeof player.on === 'function') {
        player.on('ended', handleEnded);
        return () => {
          if (typeof player.off === 'function') player.off('ended', handleEnded);
        };
      } else if (typeof player.addEventListener === 'function') {
        player.addEventListener('ended', handleEnded);
        return () => {
          if (typeof player.removeEventListener === 'function') player.removeEventListener('ended', handleEnded);
        };
      } else if (player.elements && player.elements.container) {
        const container = player.elements.container;
        container.addEventListener('ended', handleEnded);
        return () => {
          if (container) container.removeEventListener('ended', handleEnded);
        };
      }
    }
  }, [currentLesson, onVideoEnd]);

  return (
    <Box sx={{ 
      width: '100%', 
      aspectRatio: '16/9', 
      bgcolor: 'black', 
      borderRadius: '16px',
      overflow: 'hidden',
      mb: 4,
      boxShadow: '0 24px 48px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1)', border: 'none', background: '#000',
      '& .plyr': {
        height: '100%',
        '--plyr-color-main': '#6366f1', // primary color
      }
    }}>
      {currentLesson?.videoUrl ? (
        <Plyr
          ref={playerRef}
          source={{
            type: 'video',
            sources: [
              { src: currentLesson.videoUrl, provider: 'html5', size: 1080 },
              { src: currentLesson.videoUrl, provider: 'html5', size: 720 },
              { src: currentLesson.videoUrl, provider: 'html5', size: 480 }
            ],
          }}
          options={{
            autoplay: true,
            controls: [
              'play-large', 
              'restart', 
              'rewind', 
              'play', 
              'fast-forward', 
              'progress', 
              'current-time',
              'duration',
              'mute', 
              'volume', 
              'captions', 
              'settings', 
              'pip', 
              'airplay', 
              'fullscreen'
            ],
            settings: ['captions', 'quality', 'speed', 'loop'],
            speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
            keyboard: { focused: true, global: true },
            tooltips: { controls: true, seek: true },
            seekTime: 10,
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

