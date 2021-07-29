import {Component} from 'react';
import {SearchBox} from './Components/searchBox/searchBox';
import {CardList} from './Components/CardList/CardList';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField : "",
    };

    // javscript by default doesnt set the scope of this for functions we have to explicitly tell what context it will be
    // we will define it in constructor
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return(
    <div className='App'>
      <h1> Search Robots </h1>
      <SearchBox placeholder='search monster' handleChange={this.handleChange}/>
      <CardList monsters={filteredMonsters} />
     </div>
    )
  }
}

export default App;
