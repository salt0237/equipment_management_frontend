import React, {useState,useEffect} from 'react'
import DataGrid from '../../ui/DataGrid'
import FurnitureFlagUp from './FurnitureFlagUp'
import FurnitureDelete from './FurnitureDelete'
import {del_columns} from '../../dataset/furniture_dataset'
import {getFurniture} from '../../../network/Furniture/GetFurniture'
import { FurnitureProps } from 'Components/types/FurnitureTypes';


export const FurnitureDeleteHistory: React.FC = () =>  {

      const [rows, setFurnitures] = useState<FurnitureProps[]>([]);
  
      useEffect(() => {
          getFurniture().then((data) => {

              console.log(data.length);
              var x = data.length;  
              for(var i = 0;x > i;i++){
                if(data[i].flag){//tureを除去
                  data.splice(i,1);
                  //console.log(data[i]);
                  i --;
                  x --;
                } //対象の配列を除去
              }
              setFurnitures(data);
          });
      },[]);
  
      
       
      return(
        <div>
          
          <DataGrid rows={rows} columns={del_columns}/>
          <FurnitureFlagUp rows={rows} columns={del_columns}/>
          <FurnitureDelete rows={rows} columns={del_columns}/>
          
        </div>

      );
};