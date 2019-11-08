import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
constructor(){
  super();

  this.state={
    AppArr:[],
    searchField:''

  }
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
 // .then(response => console.log(response.json()))
 .then(response => response.json())
 .then(users => this.setState({AppArr:users}))
}
handleChange = e =>(
 this.setState({searchField: e.target.value},()=>console.log(this.state))
)
  render(){
    const {AppArr,searchField} = this.state;
    const filteredArr= AppArr.filter(AppAr => AppAr.username.toLowerCase().includes(searchField.toLowerCase())
    );
  return (
    
    <div className="App">
      <h1>Progressive web store</h1>

      <SearchBox placeholder="Search the store..." handleChange={this.handleChange}></SearchBox>
       <CardList AppArr={filteredArr}>
     </CardList>
    </div>
  );
}
}

export default App;
