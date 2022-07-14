import React from 'react'

import {ConsumableDataGrid}  from '../view/Consumable/ConsumableDataGrid';
import ConsumablePost from '../view/Consumable/ConsumablePost';
import ConsumableDelete from '../view/Consumable/ConsumableDelete';

export default function TabConsumable() {
   
      return(
        <div>
            <ConsumableDataGrid/>
            <ConsumablePost/>
            <ConsumableDelete/>
        </div>
      )
}