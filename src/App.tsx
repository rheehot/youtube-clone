import React from 'react';
import { Grid } from '@material-ui/core';

import youtube from './api/youtube';

const App: React.FC = () => {
  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={8}>
        <Grid container spacing={10}>
          <Grid item xs={8}>
            {/* SEARCH BAR */}
          </Grid>
          <Grid item xs={6}>
            {/* VIDEO DETAILS */}
          </Grid>
          <Grid item xs={4}>
            {/* VIDEO LIST */}
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
}

export default App;
