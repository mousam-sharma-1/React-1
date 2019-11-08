import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';
export const CardList = props =>(
  //  console.log(props);
 <div className='card-list'>
         {
       props.AppArr.map(AppArr => (
      <Card key={AppArr.id} AppArr={AppArr} />
       )
       )
    }

</div>
);