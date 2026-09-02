import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import { alpha } from '@mui/material/styles';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, Minimize, 
  Settings, PictureInPicture, SkipBack, SkipForward, Loader2,
  AlertCircle
} from 'lucide-react';
import { useVideoPlayer } from './useVideoPlayer';
import type { CourseLesson } from '@/interfaces';

interface VideoPlayerUIProps {
  currentLesson: CourseLesson;
  onVideoEnd?: () => void;
}

const formatTime = (time: number) => {
  if (isNaN(time)) return '0:00';
  const m = Math.floor(time / 60);
  const s = Math.floor(time % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
};

export function VideoPlayerUI({ currentLesson, onVideoEnd }: VideoPlayerUIProps) {
  const { videoRef, containerRef, state, actions } = useVideoPlayer();
  const [showSettings, setShowSettings] = useState(false);

  const handleVideoEnded = () => {
    actions.setIsPlaying(false);
    actions.setShowControls(true);
    if (onVideoEnd) onVideoEnd();
  };

  if (!currentLesson?.videoUrl) {
    return (
      <Box sx={{ width: '100%', aspectRatio: '16/9', bgcolor: '#0b0f19', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid', borderColor: 'divider' }}>
        <Typography color="text.secondary">No video stream available</Typography>
      </Box>
    );
  }

  return (
    <Box 
      ref={containerRef}
      onMouseMove={actions.handleUserActivity}
      onMouseLeave={() => { if(state.isPlaying) actions.setShowControls(false); setShowSettings(false); }}
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        bgcolor: '#000',
        borderRadius: state.isFullscreen ? 0 : '16px',
        overflow: 'hidden',
        mb: state.isFullscreen ? 0 : 4,
        boxShadow: state.isFullscreen ? 'none' : `0 24px 48px rgba(0,0,0,0.5), 0 0 0 1px ${alpha(brand[500], 0.2)}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover .player-controls': { opacity: 1 },
      }}
    >
      <video
        ref={videoRef}
        src={currentLesson.videoUrl}
        
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        onClick={actions.togglePlay}
        onTimeUpdate={actions.handleTimeUpdate}
        onLoadedMetadata={actions.handleLoadedMetadata}
        onPlay={() => actions.setIsPlaying(true)}
        onPause={() => actions.setIsPlaying(false)}
        onWaiting={() => actions.setIsBuffering(true)}
        onPlaying={() => actions.setIsBuffering(false)}
        onEnded={handleVideoEnded}
        onError={() => actions.setHasError(true)}
      />

      {/* Buffering Overlay */}
      {state.isBuffering && !state.hasError && (
        <Box sx={{ position: 'absolute', color: brand[500], pointerEvents: 'none' }}>
          <Loader2 size={48} className="animate-spin" />
        </Box>
      )}

      {/* Error Overlay */}
      {state.hasError && (
        <Stack alignItems="center" spacing={2} sx={{ position: 'absolute', color: 'error.main', pointerEvents: 'none', bgcolor: 'rgba(0,0,0,0.7)', p: 4, borderRadius: '16px' }}>
          <AlertCircle size={48} />
          <Typography variant="h6" color="white">Stream Interrupted</Typography>
          <Typography variant="body2" color="rgba(255,255,255,0.7)">Failed to load video resource</Typography>
        </Stack>
      )}

      {/* Central Big Play Button (when paused) */}
      {!state.isPlaying && !state.isBuffering && !state.hasError && (
        <IconButton 
          onClick={actions.togglePlay}
          sx={{ 
            position: 'absolute', 
            bgcolor: alpha(brand[500], 0.2), 
            color: 'white', 
            backdropFilter: 'blur(10px)',
            p: 3, 
            border: `1px solid ${alpha(brand[500], 0.5)}`,
            '&:hover': { bgcolor: alpha(brand[500], 0.4), transform: 'scale(1.1)' },
            transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          <Play size={40} fill="currentColor" style={{ marginLeft: 4 }} />
        </IconButton>
      )}

      {/* Controls Overlay */}
      <Box 
        className="player-controls"
        sx={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          opacity: state.showControls || !state.isPlaying ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
          px: { xs: 2, md: 4 },
          pb: { xs: 2, md: 3 },
          pt: 8,
          pointerEvents: state.showControls || !state.isPlaying ? 'auto' : 'none',
        }}
      >
        {/* Title Bar (Top of controls gradient) */}
        <Typography variant="subtitle2" fontWeight={700} color="white" sx={{ mb: 1, opacity: 0.8, display: { xs: 'none', sm: 'block' } }}>
          {currentLesson.title}
        </Typography>

        {/* Seek Bar with Buffered Progress */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, position: 'relative', height: 20 }}>
          {/* Buffered Progress Bar underneath */}
          <Box sx={{ 
            position: 'absolute', left: 0, right: 0, top: '50%', transform: 'translateY(-50%)',
            height: 4, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 2, pointerEvents: 'none'
          }}>
            <Box sx={{ 
              width: `${state.bufferedProgress}%`, height: '100%', 
              bgcolor: 'rgba(255,255,255,0.4)', borderRadius: 2, transition: 'width 0.2s' 
            }} />
          </Box>
          
          <Slider
            size="small"
            value={state.currentTime}
            min={0}
            max={state.duration || 100}
            onChange={(_, val) => actions.handleSeek(val as number)}
            sx={{
              color: brand[500],
              height: 4,
              p: '13px 0',
              '& .MuiSlider-thumb': {
                width: 12, height: 12,
                transition: '0.2s',
                '&:hover, &.Mui-focusVisible': { boxShadow: `0px 0px 0px 8px ${alpha(brand[500], 0.16)}` },
                '&.Mui-active': { boxShadow: `0px 0px 0px 14px ${alpha(brand[500], 0.16)}` },
              },
              '& .MuiSlider-rail': { opacity: 0 }, // hidden because custom rail used above
              '& .MuiSlider-track': { border: 'none' },
            }}
          />
        </Box>

        {/* Bottom Bar */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton size="small" onClick={actions.togglePlay} sx={{ color: 'white', '&:hover': { color: brand[300] } }}>
              {state.isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
            </IconButton>
            
            <IconButton size="small" onClick={() => actions.skip(-10)} sx={{ color: 'white', display: { xs: 'none', sm: 'flex' }, '&:hover': { color: brand[300] } }}>
              <SkipBack size={18} />
            </IconButton>
            
            <IconButton size="small" onClick={() => actions.skip(10)} sx={{ color: 'white', display: { xs: 'none', sm: 'flex' }, '&:hover': { color: brand[300] } }}>
              <SkipForward size={18} />
            </IconButton>

            {/* Volume */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: { xs: 0, sm: 2 }, '&:hover .volume-slider': { width: 80, opacity: 1 } }}>
              <IconButton size="small" onClick={actions.toggleMute} sx={{ color: 'white', '&:hover': { color: brand[300] } }}>
                {state.isMuted || state.volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </IconButton>
              <Box className="volume-slider" sx={{ width: 0, opacity: 0, transition: 'all 0.3s ease', display: { xs: 'none', sm: 'block' }, overflow: 'hidden' }}>
                <Slider
                  size="small"
                  value={state.isMuted ? 0 : state.volume}
                  min={0} max={1} step={0.01}
                  onChange={(_, val) => actions.changeVolume(val as number)}
                  sx={{ color: 'white', width: 70, ml: 1, py: '13px' }}
                />
              </Box>
            </Box>

            {/* Time */}
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', ml: 2, fontFamily: 'monospace', fontSize: '13px', display: { xs: 'none', md: 'block' } }}>
              {formatTime(state.currentTime)} / {formatTime(state.duration)}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Box sx={{ position: 'relative' }}>
              <IconButton size="small" onClick={() => setShowSettings(!showSettings)} sx={{ color: 'white', '&:hover': { color: brand[300] } }}>
                <Settings size={20} />
              </IconButton>
              
              {/* Settings Menu Popup */}
              {showSettings && (
                <Box sx={{ position: 'absolute', bottom: '100%', right: 0, mb: 2, bgcolor: 'rgba(11, 15, 25, 0.95)', backdropFilter: 'blur(20px)', borderRadius: '12px', border: `1px solid ${alpha(brand[500], 0.3)}`, p: 2, minWidth: 200, color: 'white', transformOrigin: 'bottom right' }}>
                  <Typography variant="caption" fontWeight={700} sx={{ opacity: 0.6, mb: 1, display: 'block', textTransform: 'uppercase' }}>Playback Speed</Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {[0.5, 1, 1.25, 1.5, 2].map(rate => (
                      <Box 
                        key={rate}
                        onClick={() => { actions.changePlaybackRate(rate); setShowSettings(false); }}
                        sx={{ px: 1.5, py: 0.5, borderRadius: '6px', fontSize: '13px', cursor: 'pointer', bgcolor: state.playbackRate === rate ? alpha(brand[500], 0.3) : 'transparent', color: state.playbackRate === rate ? brand[300] : 'white', '&:hover': { bgcolor: alpha(brand[500], 0.2) }, fontWeight: 600 }}
                      >
                        {rate}x
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}
            </Box>

            {/* Browser PiP API requires secure context and isn't supported everywhere, but it's safe to include the button as native video has PiP */}
            <IconButton size="small" onClick={actions.togglePiP} sx={{ color: 'white', display: { xs: 'none', sm: 'flex' }, '&:hover': { color: brand[300] } }}>
              <PictureInPicture size={18} />
            </IconButton>

            <IconButton size="small" onClick={actions.toggleFullscreen} sx={{ color: 'white', '&:hover': { color: brand[300] } }}>
              {state.isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
