import React from 'react';
import { Monster } from '../../Monster';
import './card.css';

type CardProps = {
  id: string;
  monster: Monster;
};

export const Card = (props: CardProps) => {
  console.log(props);
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h3 key={props.id}>{props.monster.name}</h3>
      <h3>{props.monster.email}</h3>
    </div>
  );
};
