import React from 'react'
import  Dialog  from '../../ui/Dialog'
import {rest} from '../../../network/axios'
import { LicenseProps } from 'Components/types/LicenseTypes'

export default function LicenseDialog(){

  const url = "/license";
  function getSystem(s:string){
    const textbox = document.getElementById(s)as HTMLInputElement;
    const data = textbox.value;
    return data;
  }

  const handleOnClick = async () => {
    const text = {
          data:
          {
          license_id:  getSystem('license_id'),
          name:getSystem('name'),
          number:getSystem('number'),
          license_key:getSystem('license_key'),
          memo:getSystem('memo'),
          },
      }
        const {data} = await rest.post<LicenseProps[]>(url,text);
        console.log('trypost');
        location.reload();
      };
    
    const dialog_id:string[][] =[['license_id','ライセンスid'],['name','ソフトウェア名称'],['number','ライセンス付与番号'],['license_key','ライセンスキー'],['memo','備考']];
  return(
    <div >
        <Dialog buttonName='追加' id={dialog_id}  textMessage='ライセンスid、ソフトフェア名称、ライセンス付与番号、ライセンスキー、備考を記入してください。' handleOnClick = {handleOnClick} />
    </div>
  )
}