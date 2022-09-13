import React from 'react'
import  Dialog  from '../../ui/Dialog'
import {rest} from '../../../network/axios'
import { ConsumableProps } from 'Components/types/ConsumableTypes'

export default function ConsumableDialog(){

  const url = "/consumable";
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
          place:getSystem('place'),
          day:getSystem('day'),
          quantity_used:getSystem('quantity_used'),
          quantity_available:getSystem('quantity_available'),
          memo:getSystem('memo'),
          flag:true
          },
      }
        const {data} = await rest.post<ConsumableProps>(url,text);
        console.log('trypost');
        console.log(data);
        console.log(data.quantity_available);
        location.reload();
      };
    
    const dialog_id:string[][] =[['name','物品名'],['place','所在'],['quantity_used','使用中'],['quantity_available','利用可能数'],['memo','備考']];
  return(
    <div >
        <Dialog buttonName='追加' id={dialog_id}  textMessage='物品名、所在、登録日、備考を記入してください。' handleOnClick = {handleOnClick} day="on"/>
    </div>
  )
}