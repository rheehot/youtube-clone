import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

interface VideoItemProps {
  video: any;
  onVideoSelect(video: any): void;
}

const VideoItem: React.FC<VideoItemProps> = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper style={{ display: 'flex', alignItems: 'center' }} onClick={() => onVideoSelect(video)}>
        <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" style={{marginRight: '20px' }} />
        <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem;