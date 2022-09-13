import React, {useState,useEffect} from 'react'
import DataGrid from '../../ui/DataGrid'
import LicenseFlagDown from './LicenseFlagDown'
import {columns} from '../../dataset/license_dataset'
import {getLicense} from '../../../network/License/GetLicense'
import { LicenseProps } from 'Components/types/LicenseTypes';


export const LicenseDataGrid: React.FC = () =>  {
   
        const [rows, setLicense] = useState<LicenseProps[]>([]);
        useEffect(() => {
            getLicense().then((data) => {
                console.log('# data',data);
                var x = data.length;  
                for(var i = 0;x > i;i++){
                  if(!data[i].flag){
                    data.splice(i--,1);
                    x --;
                  } //対象の配列を除去
                }
                setLicense(data);
            });
        },[]);

      return(
        <div >
            <DataGrid rows={rows} columns={columns}/>
            <LicenseFlagDown rows={rows} columns={columns}/>
        </div>

      );
};