import React from 'react';

import VideoItem from './VideoItem';
import { Grid } from '@material-ui/core';

interface VideoListlProps {
  videos: any;
  onVideoSelect(video: Object): void;
}

const VideoList: React.FC<VideoListlProps> = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video: any, id: any) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />);

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
}

export default VideoList;