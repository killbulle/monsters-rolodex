import React from 'react';
import { Monster } from '../../Monster';
import './card.css';

type CardProps = {
  key: string;
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
      <h1 key={props.key}>{props.monster.name}</h1>
      <text>{props.monster.email}</text>
    </div>
  );
};
