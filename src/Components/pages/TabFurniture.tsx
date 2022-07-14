import React from 'react'

import {FurnitureDataGrid}  from '../view/Furniture/FurnitureDataGrid';
import FurniturePost from '../view/Furniture/FurniturePost';
import FurnitureDelete from '../view/Furniture/FurnitureDelete';

export default function TabFurniture() {

      return(
        <div>
            <FurnitureDataGrid/>
            <FurniturePost/>
            <FurnitureDelete/>
        </div>
      )
}