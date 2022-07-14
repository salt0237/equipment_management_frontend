import React from 'react'
import  Dialog  from '../../ui/Dialog'
import {rest} from '../../../network/axios'
import { FurnitureProps } from 'Components/types/FurnitureTypes'

export default function FurnitureDelete(){

  const url = "/furniture";
  function getSystem(s:string){
    const textbox = document.getElementById(s)as HTMLInputElement;
    const data = textbox.value;
    return data;
  }

    const handleOnClick = async () => {
        const url = "/furniture/";
        const id = getSystem('id');
        console.log(id);
        const {data} = await rest.delete<FurnitureProps[]>(url+id)
        console.log(data);
        location.reload();
    };
    
    const dialog_id:string[][] =[['id','id']];
  return(
    <div >
        <Dialog buttonName='削除' id={dialog_id} textMessage='削除するデータのidを入力してください' handleOnClick = {handleOnClick} />
    </div>

  )
}