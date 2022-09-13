import React, {useState,useEffect} from 'react'
import DataGrid from '../../ui/DataGrid'
import ConsumableFlagDown from './ConsumableFlagDown'
import {columns} from '../../dataset/consumable_dataset'
import {getConsumable} from '../../../network/Consumable/GetConsumable'
import { ConsumableProps } from 'Components/types/ConsumableTypes';


export const ConsumableDataGrid: React.FC = () =>  {
   
        const [rows, setConsumables] = useState<ConsumableProps[]>([]);
        useEffect(() => {
            getConsumable().then((data) => {
                console.log('# data',data);
                var x = data.length;  
                for(var i = 0;x > i;i++){
                  if(!data[i].flag){
                    data.splice(i--,1);
                    x --;
                  } //対象の配列を除去
                }
                setConsumables(data);
            });
        },[]);

      return(
        <div >
            <DataGrid rows={rows} columns={columns}/>
            <ConsumableFlagDown rows={rows} columns={columns}/>
        </div>

      );
};