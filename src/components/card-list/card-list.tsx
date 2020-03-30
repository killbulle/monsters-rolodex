import React from 'react';
import { Monster } from '../../Monster';
import './card-list.css';
import { Card } from '../card/card';

type CardListProps = {
  monsters: Monster[];
};

export const CardList = (props: CardListProps) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((monster: Monster) => {
        return <Card id={monster.id} key={monster.id} monster={monster}></Card>;
      })}
    </div>
  );
};
export default CardList;

// class Cardlist extends React.Component<{}, {}> {
//   state = {
//     monsters: [],
//   };
//
//   componentDidMount(): void {
//     const responsePromise = fetch('https://jsonplaceholder.typicode.com/users')
//       .then((resp) => resp.json())
//       .then((users) => {
//         this.setState({
//           monsters: users,
//         });
//       });
//   }
//
//   render() {
//     return (
//       <div className="Cardlist">
//         {this.state.monsters.map((monster: Monster) => {
//           return <h1 key={monster.id}>{monster.name}</h1>;
//         })}
//       </div>
//     );
//   }
// }

// export default Cardlist;
