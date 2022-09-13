import React, {useState,useEffect} from 'react'
import DataGrid from '../../ui/DataGrid'
import ConsumableFlagUp from './ConsumableFlagUp'
import ConsumableDelete from './ConsumableDelete'
import {del_columns} from '../../dataset/consumable_dataset'
import {getConsumable} from '../../../network/Consumable/GetConsumable'
import { ConsumableProps } from 'Components/types/ConsumableTypes';


export const ConsumableDeleteHistory: React.FC = () =>  {

   
      const [rows, setConsumables] = useState<ConsumableProps[]>([]);
  
      useEffect(() => {
          getConsumable().then((data) => {
              
              console.log(data.length);
              var x = data.length;  
              for(var i = 0;x > i;i++){
                if(data[i].flag){//tureを除去
                  data.splice(i,1);
                  i --;
                  x --;
                } //対象の配列を除去
              }
                     
            setConsumables(data);
          });
      },[]);
  
      
       
      return(
        <div>
            <DataGrid rows={rows} columns={del_columns}/>
            <ConsumableFlagUp rows={rows} columns={del_columns}/>
            <ConsumableDelete rows={rows} columns={del_columns}/>
        </div>

      );
};