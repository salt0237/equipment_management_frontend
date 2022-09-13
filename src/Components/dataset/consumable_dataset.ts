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
      field: 'day',
      headerName: '登録日',
      width: 110,
      editable: true,
    },
    {
      field: 'quantity_used',
      headerName: '利用中',
      width: 110,
      editable: true,
    },
    {
      field: 'quantity_available',
      headerName: '使用可能数',
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

  export const del_columns: GridColDef[] = [
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
      field: 'day',
      headerName: '登録日',
      width: 110,
      editable: true,
    },
    {
      field: 'quantity_used',
      headerName: '利用中',
      width: 110,
      editable: true,
    },
    {
      field: 'quantity_available',
      headerName: '使用可能数',
      width: 110,
      editable: true,
    },
    {
      field: 'memo',
      headerName: '備考',
      width: 500,
      editable: true,
    },
    {
      field: 'updated_at',
      headerName: '削除日',
      width: 200,
      editable: true,
    },
  ];