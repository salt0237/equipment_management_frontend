import React, {useState,useEffect} from 'react'
import DataGrid from '../../ui/DataGrid'
import {columns} from '../../dataset/license_dataset'
import {getLicense} from '../../../network/License/GetLicense'
import { LicenseProps } from 'Components/types/LicenseTypes';


export const LicenseDataGrid: React.FC = () =>  {
   
        const [rows, setLicense] = useState<LicenseProps[]>([]);
        useEffect(() => {
            getLicense().then((data) => {
                console.log('# data',data);
                setLicense(data);
                console.log('表示');
            });
        },[]);

      return(
        <div >
            <DataGrid rows={rows} columns={columns}/>
        </div>

      );
};