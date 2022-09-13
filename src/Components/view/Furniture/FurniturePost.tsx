import React from 'react'
import  Dialog  from '../../ui/Dialog'
import {rest} from '../../../network/axios'
import { FurnitureProps } from 'Components/types/FurnitureTypes'

export default function FurnitureDialog(){

  const url = "/furniture";
  function getSystem(s:string){
    const textbox = document.getElementById(s)as HTMLInputElement;
    const data = textbox.value;
    return data;
  }


  const handleOnClick = async () => {
    const text = {
          data:
          {
          name:  getSystem('name'),
          number:getSystem('number'),
          person:getSystem('person'),
          place:getSystem('place'),
          day:getSystem('day'),
          memo:getSystem('memo'),
          flag:true
          },
      }
        const {data} = await rest.post<FurnitureProps>(url,text);
        console.log('trypost');
        console.log(data);
        location.reload();
      };
    
    const dialog_id:string[][] =[['name','物品名'],['number','管理番号'],['person','利用者'],['place','所在'],['memo','備考']];//,['day','取得日']
  return(
    <div >
        <Dialog buttonName='追加' id={dialog_id}  textMessage='物品名、管理番号、利用者、所在、取得日、備考を記入してください。' handleOnClick = {handleOnClick} day="on"/>
    </div>
  )
}