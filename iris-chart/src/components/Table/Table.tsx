import { FC } from 'react';

import { DataGrid } from '@mui/x-data-grid';

import { getTableOptions } from '../../utils/table';
import { TableProps } from './types';
import { useStyles } from './styles';

export const Table: FC<TableProps> = ({ data }) => {
  const classes = useStyles();
  const tableOptions = getTableOptions(data);

  /**
   *
   * Component.
   *
   */

  return (
    <div className={classes.table}>
      <DataGrid {...tableOptions} />
    </div>
  );
};
