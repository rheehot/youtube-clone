import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import youtube from './api/youtube';
import { SearchBar, VideoList, VideoDetail } from './components'

const App: React.FC = () => {
  const [videos, setVideos] = useState<Object[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Object>();

  const handleSubmit = async (searchTerm: string) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyAY7kDFaVbdzAyIfaR6ck95tgshjf8wPzs', /* TODO: put in YOUTUBE API KEY */
        q: searchTerm,
      }
    });

    setVideos([response.data.items]);
    setSelectedVideo(response.data.items[0]);
  }

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo}/>
          </Grid>
          <Grid item xs={4}>
            <VideoList />
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
}

export default App;
