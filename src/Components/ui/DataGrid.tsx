import * as React from 'react';
import { DataGrid} from "@mui/x-data-grid";
import { DataGridProps, Rows } from "../types/DataGridType";

export default function DataGridDom(props: DataGridProps<Rows>) {

    const { rows, columns} = props;

    return (
      <div style={{ height: 420, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    );
  }