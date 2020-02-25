import React from 'react';
import { Grid } from '@material-ui/core';

import youtube from './api/youtube';
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const App: React.FC = () => {
  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={8}>
        <Grid container spacing={10}>
          <Grid item xs={8}>
            <SearchBar />
          </Grid>
          <Grid item xs={6}>
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
