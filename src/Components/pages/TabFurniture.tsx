import React from 'react'

import {FurnitureDataGrid}  from '../view/Furniture/FurnitureDataGrid';
import FurniturePost from '../view/Furniture/FurniturePost';

export default function TabFurniture() {

      return(
        <div>
            <FurnitureDataGrid/>
            <FurniturePost/>
        </div>
      )
}