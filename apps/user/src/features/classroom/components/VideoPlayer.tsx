import React from 'react';
import type { CourseLesson } from '@/interfaces';
import { VideoPlayerUI } from '@/components/ui/video-player';

interface VideoPlayerProps {
  currentLesson: CourseLesson;
  onVideoEnd?: () => void;
}

export function VideoPlayer({ currentLesson, onVideoEnd }: VideoPlayerProps) {
  return <VideoPlayerUI currentLesson={currentLesson} onVideoEnd={onVideoEnd} />;
}
