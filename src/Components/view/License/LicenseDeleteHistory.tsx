import React, {useState,useEffect} from 'react'
import DeleteHistoryDataGrid from '../../ui/DeleteHistoryDataGrid'
import LicenseFlagUp from './LicenseFlagUp'
import LicenseDelete from './LicenseDelete'
import {del_columns} from '../../dataset/license_dataset'
import {getLicense} from '../../../network/License/GetLicense'
import { LicenseProps } from 'Components/types/LicenseTypes';


export const LicenseDeleteHistory: React.FC = () =>  {

   
      const [rows, setlicenses] = useState<LicenseProps[]>([]);
  
      useEffect(() => {
          getLicense().then((data) => {
              
              console.log(data.length);
              var x = data.length;  
              for(var i = 0;x > i;i++){
                if(data[i].flag){//tureを除去
                  data.splice(i,1);
                  i --;
                  x --;
                } //対象の配列を除去
              }
                     
            setlicenses(data);
          });
      },[]);
  
      
       
      return(
        <div>
            <DeleteHistoryDataGrid rows={rows} columns={del_columns}/>
            <LicenseFlagUp rows={rows} columns={del_columns}/>
            <LicenseDelete rows={rows} columns={del_columns}/>
        </div>

      );
};