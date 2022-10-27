import React from 'react'
import Button from '../../ui/Button'

import {rest} from '../../../network/axios'
import { FurnitureProps } from 'Components/types/FurnitureTypes'
import { DataGridProps, Rows } from "Components/types/DataGridType";

export default function FurnitureUpdate(props: DataGridProps<Rows>){

 

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
        const url = "/furniture/";
        const id = flagcheck[j];
        console.log("id"+id+"をupdateします");
        const text = {
          data:
          {
          
          flag:true
          },
        }
        const {data} = await rest.put<FurnitureProps[]>(url+id,text);
        console.log(rows[j].name);
        console.log(data);
        console.log(rows);
      }
      //location.reload();//処理を終えたらリロード
    }
    
    const dialog_id:string[][] =[['id','id']];
  return(
    <div >
        <Button ButtonText='変更を反映' handleOnClick = {upOnClick}/>
    </div>

  )
}
/*name: rows[id].name,
          number: rows[id].name,
          person: rows[id].name,
          place: rows[id].name,
          day: rows[id].name,
          memo: rows[id].name,
 */