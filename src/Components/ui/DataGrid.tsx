import * as React from 'react';
import { DataGrid, GridCellEditStopParams, GridCellEditStopReasons, MuiEvent } from "@mui/x-data-grid";
import { DataGridProps, Rows } from "../types/DataGridType";
import { cellClickHandler } from '../model/CellClickHandler';
import { changeCellData } from '../model/ChangeCellData';


export default function DataGridDom(props: DataGridProps<Rows>) {

    const { rows, columns} = props;

    
    
    return (
      <div style={{ height: 420, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          onCellClick={(id) => cellClickHandler(rows,id)}
          onCellEditCommit={id=>changeCellData(id)}
        />
      </div>
    );
  }
//onCellClick={(id) => cellClickHandler(rows,id)}
//onSelectionModelChange={itm=> console.log(itm)}
/*
onSelectionModelChange={itm=> cellClickHandler(rows,itm)}
          onCellEditCommit={id=>changeCellData(id)}
*/