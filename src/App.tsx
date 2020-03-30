import React from 'react';
import './App.css';
import { AppState } from './AppState';
import CardList from './components/card-list/card-list';
import { SearchBox } from './components/searchbox/searchbox';

class App extends React.Component<{}, AppState> {
  state: AppState = {
    monsters: [],
    search: '',
    title: '',
  };

  componentDidMount(): void {
    const responsePromise = fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((users) => {
        this.setState({
          monsters: users,
        });
      });
  }

  render(): any {
    const { monsters, search } = this.state;
    const monstersfiltered = monsters.filter((m) =>
      m.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handle} />
        <CardList monsters={monstersfiltered} />
      </div>
    );
  }

  handle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const search = evt.target.value;
    return this.setState((stateold) => {
      return {
        search: search,
        title: search,
      };
    });
  };
}

export default App;
