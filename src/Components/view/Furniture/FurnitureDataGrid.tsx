import React, {useState,useEffect} from 'react'
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataGrid from '../../ui/DataGrid'
import {columns} from '../../dataset/furniture_dataset'
import {getFurniture} from '../../../network/Furniture/GetFurniture'
import { FurnitureProps } from 'Components/types/FurnitureTypes';


export const FurnitureDataGrid: React.FC = () =>  {
   
        const [rows, setFurnitures] = useState<FurnitureProps[]>([]);
        useEffect(() => {
            getFurniture().then((data) => {
                console.log('# data',data);
                setFurnitures(data);
                console.log('表示');
            });
        },[]);

      return(
        <div >
            <DataGrid rows={rows} columns={columns}/>
        </div>

      );
};