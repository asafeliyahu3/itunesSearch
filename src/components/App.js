import React from 'react';
//import axios from 'axios';
import itunes from '../api/itunes';
import SearchBar from './SearchBar';
import ResultList from './ResultList';


class App extends React.Component {

  state = { images: [] };

onSearchSubmit = async (term) => {
      const response = await itunes.get('/search', {
        params: { term: term }
        //רציתי להוסיף
        //+ "&" +'limit=25'
        //כדי להגביל את מספר התוצאות בדף אבל זה הפך את הסימן
        //&
        //ל%26
        //אז דילגתי בינתיים

  });
    // console.log(response.data.results);
    this.setState({ images: response.data.results});
  };

//   onSearchSubmit(term) {
//
//     axios.get('https://itunes.apple.com/search', {
//       params: { term: term },
//     //headers:{
//       //Authorization: 'Client-ID MY ACCESS KEY'
//   //}
// }).then ((response) => {
// console.log(response.data.results);
// });
//   //  console.log(term);
//   }


  render() {

      return (
      <div className="ui container" style={{marginTop:'5vh'}}>
      <SearchBar onSubmit={this.onSearchSubmit} />
      <br />
      <span style={{fontSize: '3.5vh',color:'black'}}>Found: {this.state.images.length} results</span>
      <br />
      <br />
      <ResultList results={this.state.images} />
      </div>
    );

  }
}



export default App;
