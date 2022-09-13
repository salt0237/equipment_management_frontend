import React from 'react'

import {FurnitureDeleteHistory}  from '../view/Furniture/FurnitureDeleteHistory';
import {LicenseDeleteHistory}  from '../view/License/LicenseDeleteHistory';
import {ConsumableDeleteHistory}  from '../view/Consumable/ConsumableDeleteHistory';


export default function TabConsumable() {
   
      return(
        <div>
            <p>削除履歴一覧</p>
            <p>備品管理</p>
           <FurnitureDeleteHistory/>
           <p></p>
           <p></p>
           <p></p>
           <p>ソフトウェアライセンス</p>
           <LicenseDeleteHistory/>
           <p></p>
           <p></p>
           <p></p>
           <p>消耗品</p>
           <ConsumableDeleteHistory/>
        </div>
      )
}