import React from 'react'
import Button from '../../ui/Button'

import {rest} from '../../../network/axios'
import { LicenseProps } from 'Components/types/LicenseTypes'
import { DataGridProps, Rows } from "Components/types/DataGridType";

export default function LicenseDelete(props: DataGridProps<Rows>){

 

    const upOnClick = async () =>{

      const { rows, columns} = props;

      const flagcheck:number[] =[];
      var num =0;
    
      for(var i = 0;rows.length > i;i++){
        if(rows[i].flag){
            flagcheck[num] = rows[i].id;
            num ++;
        }
      }

      for(var j =0;flagcheck.length>j;j++){
        const url = "/license/";
        const id = flagcheck[j];
        console.log("id"+id+"を削除します");
        const text = {
          data:
          {
            flag:false
          },
        }
        const {data} = await rest.delete<LicenseProps[]>(url+id);
        console.log(data);
      }
      location.reload();
    }
    
    const dialog_id:string[][] =[['id','id']];
  return(
    <div >
        <Button ButtonText='チェックしたものを削除' handleOnClick = {upOnClick}/>
    </div>

  )
}