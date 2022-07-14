import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
export const columns: GridColDef[] = [
    { field: 'id', headerName: 'id', width: 40 },

    {
      field: 'name',
      headerName: '消耗品名',
      width: 200,
      editable: true,
    },
    {
      field: 'place',
      headerName: '所在',
      width: 200,
      editable: true,
    },
    {
      field: 'memo',
      headerName: '備考',
      width: 500,
      editable: true,
    },
  ];