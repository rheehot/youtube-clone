import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import youtube from './api/youtube';
import { SearchBar, VideoList, VideoDetail } from './components'

const App: React.FC = () => {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});

  const handleSubmit = async (searchTerm: string) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: '', /* TODO: put in YOUTUBE API KEY */
        q: searchTerm,
      }
    });


    /* setState가 안되는 버그 있음. */

    console.log(response.data.items);

    // setVideo(response.data.items);
    setSelectedVideo(response.data.items[0]);

    console.log(video);
    console.log(selectedVideo);
    
  }

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoList />
          </Grid>
          <Grid item xs={4}>
            <VideoDetail />
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
}

export default App;
