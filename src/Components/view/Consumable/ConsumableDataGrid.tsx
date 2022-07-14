import React, {useState,useEffect} from 'react'
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataGrid from '../../ui/DataGrid'
import {columns} from '../../dataset/consumable_dataset'
import {getConsumable} from '../../../network/Consumable/GetConsumable'
import { ConsumableProps } from 'Components/types/ConsumableTypes';


export const ConsumableDataGrid: React.FC = () =>  {
   
        const [rows, setConsumables] = useState<ConsumableProps[]>([]);
        useEffect(() => {
            getConsumable().then((data) => {
                console.log('# data',data);
                setConsumables(data);
                console.log('表示');
            });
        },[]);

      return(
        <div >
            <DataGrid rows={rows} columns={columns}/>
        </div>

      );
};