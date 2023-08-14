import { GridColDef } from '@mui/x-data-grid';

/**
 *
 * Utils related to Table.
 *
 */

export const getTableOptions = (data) => {
  const rows = [];
  const points = data.data.data;

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'bps_in', headerName: 'Bps in', width: 150, flex: 1 },
    { field: 'bps_out', headerName: 'Bps out', width: 150, flex: 1 },
    { field: 'bps_in_max_p', headerName: 'Packets in', width: 150, flex: 1 },
    { field: 'bps_out_max_p', headerName: 'Packets out', width: 150, flex: 1 },
    { field: 'speed', headerName: 'Speed', width: 150, flex: 1 },
  ];

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const bps_in = point[0];
    const bps_out = point[2];
    const bps_in_max_p = point[1];
    const bps_out_max_p = point[3];
    const speed = point[4];
    const row = {
      id: i,
      bps_in,
      bps_out,
      bps_in_max_p,
      bps_out_max_p,
      speed,
    };
    rows.push(row);
  }

  return {
    rows: rows,
    columns: columns,
    initialState: {
      pagination: {
        paginationModel: { page: 0, pageSize: 5 },
      },
    },
    pageSizeOptions: [5, 10],
    checkboxSelection: false,
  };
};
