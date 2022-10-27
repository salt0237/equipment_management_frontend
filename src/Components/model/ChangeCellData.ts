import * as React from 'react';
import { GridCellEditCommitParams, GridSelectionModel } from "@mui/x-data-grid";
import { DataGridProps, Rows } from "../types/DataGridType";
import {rest} from '../../network/axios'
import { FurnitureProps } from 'Components/types/FurnitureTypes'

import Dialog from "../ui/Dialog";


export const changeCellData =(id:GridCellEditCommitParams)=>{

    console.log(id);
    console.log(id.id);
    console.log(id.field);
    console.log(id.value);


    const upDate = async () =>{
    const url = "/furniture/";
    const text = {
        data:
        {
          name : id.value
        },
      }
      const {data} = await rest.put<FurnitureProps[]>(url+id.id,text);
      console.log(data);
    location.reload();//処理を終えたらリロード
    }

    upDate();
}


  