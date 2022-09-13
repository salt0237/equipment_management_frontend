import React from 'react'
import Button from '../../ui/Button'

import {rest} from '../../../network/axios'
import { LicenseProps } from 'Components/types/LicenseTypes';
import { DataGridProps, Rows } from "Components/types/DataGridType";

export default function LicenseFlagUp(props: DataGridProps<Rows>){

 

    const upOnClick = async () =>{

      const { rows, columns} = props;

      const flagcheck:number[] =[];
      var num =0;
    
      for(var i = 0;rows.length > i;i++){
        if(!rows[i].flag){
            flagcheck[num] = rows[i].id;
            num ++;
        }
      }//表示されているデータ(引数で受け取る)をすべて見て、flagがfalseになっているものを配列に保存

      for(var j =0;flagcheck.length>j;j++){
        const url = "/license/";//こいつを引数で与えて呼び出すようにすれば関数みたいにできる。時間ないからあとでやる。＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
        const id = flagcheck[j];//flagcheckに入っているflagが立っているデータベースのidを取り出す
        const number = j;
        console.log("id"+id+"を非表示にします");
        const text = {
          data:
          {
            flag:false
          },
        }
        const {data} = await rest.put<LicenseProps[]>(url+id,text);
        console.log(rows[j].name);
        console.log(data);
      }
      location.reload();//処理を終えたらリロード
    }
    
    const dialog_id:string[][] =[['id','id']];
  return(
    <div >
        <Button ButtonText='チェックしたものを削除' handleOnClick = {upOnClick}/>
    </div>

  )
}