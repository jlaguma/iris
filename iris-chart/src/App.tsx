import { isEmpty } from 'lodash';
import Grid from '@mui/material/Grid';

import { Chart } from './components/Chart';
import { Table } from './components/Table';
import { useGetData } from './hooks/useGetData';
import { LoadingOverlay } from './components/LoadingOverlay';

import { useStyles } from './styles';
import './App.css';

function App() {
  const classes = useStyles();

  /**
   *
   * Custom hooks.
   *
   */

  const { data, error } = useGetData();

  /**
   *
   * Error handling.
   *
   */

  if (error) {
    console.log(error);
  }

  /**
   *
   * Component.
   *
   */

  return (
    <>
      {isEmpty(data) ? (
        <LoadingOverlay show />
      ) : (
        <>
          <Grid container direction='column' className={classes.app}>
            <Grid>
              <Chart data={data} />
            </Grid>
            <Grid>
              <Table data={data} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

export default App;
