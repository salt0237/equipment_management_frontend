import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
export const columns: GridColDef[] = [
    { field: 'id', headerName: 'id', width: 40},

    {
      field: 'license_id',
      headerName: 'ライセンスid',
      width: 150,
      editable: true,
    },
    {
      field: 'name',
      headerName: 'ソフトフェア名称',
      width: 150,
      editable: true,
    },
    {
      field: 'number',
      headerName: 'ライセンス付与番号',
      width: 200,
      editable: true,
    },
    {
      field: 'license_key',
      headerName: 'ライセンスキー',
      width: 300,
      editable: true,
    },
    {
      field: 'memo',
      headerName: '備考',
      width: 500,
      editable: true,
    },
  ];