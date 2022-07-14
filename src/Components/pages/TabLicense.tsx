import React from 'react'

import {LicenseDataGrid}  from '../view/License/LicenseDataGrid';
import LicensePost from '../view/License/LicensePost';
import LicenseDelete from '../view/License/LicenseDelete';

export default function TabLicenset() {
   
      return(
        <div>
            <LicenseDataGrid/>
            <LicensePost/>
            <LicenseDelete/>
        </div>
      )
}