import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
export const columns: GridColDef[] = [
    { field: 'id', headerName: 'id', width: 50 },

    {
      field: 'name',
      headerName: '物品名',
      width: 110,
      editable: true,
    },
    {
      field: 'number',
      headerName: '管理番号',
      width: 200,
      editable: true,
    },
    {
      field: 'person',
      headerName: '名前',
      width: 110,
      editable: true,
    },
    {
      field: 'place',
      headerName: '所在',
      width: 200,
      editable: true,
    },
    {
      field: 'day',
      headerName: '取得日',
      width: 110,
      editable: true,
    },
    {
      field: 'memo',
      headerName: '備考',
      width: 500,
      editable: true,
    },
  ];