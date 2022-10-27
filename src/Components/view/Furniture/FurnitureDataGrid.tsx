import React, {useState,useEffect} from 'react'
import DataGrid from '../../ui/DataGrid'
import FurnitureFlagDown from './FurnitureFlagDown'
import FurnitureUpdate from './FurnitureUpdate'
import {columns} from '../../dataset/furniture_dataset'
import {getFurniture} from '../../../network/Furniture/GetFurniture'
import { FurnitureProps } from 'Components/types/FurnitureTypes';


export const FurnitureDataGrid: React.FC = () =>  {

      const [rows, setFurnitures] = useState<FurnitureProps[]>([]);
  
      useEffect(() => {
          getFurniture().then((data) => {
              
              console.log(data.length);
              var x = data.length;  
              for(var i = 0;x > i;i++){
                if(!data[i].flag){
                  data.splice(i,1);
                  i --;
                  x --;
                } //対象の配列を除去
              }
                     
            setFurnitures(data);
          });
      },[]);
  
      
       
      return(
        <div>
            <DataGrid rows={rows} columns={columns} />
            <FurnitureFlagDown rows={rows} columns={columns} />
        </div>

      );
};
//               if(data[1].flag == false){

/*filterで取り出す
console.log(data.filter(function(element){
                return element.flag ==false;
              }))
*/