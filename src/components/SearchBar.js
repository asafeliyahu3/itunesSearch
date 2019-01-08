import React from 'react';

class SearchBar extends React.Component {

state = {term:''};

onFormSubmit = (event) => {

  event.preventDefault();
  this.props.onSubmit(this.state.term);

};

  render() {

    return(
      <div className="ui segment">
      <img src="https://www.energizeshanti.com/wp-content/uploads/2016/10/Logo-iTunes.jpg" style={{width:'40vh', height:'30vh'}} />
        <img src="https://s3.amazonaws.com/media.eremedia.com/uploads/2016/10/11120021/google5.jpg" style={{width:'40vh', height:'15vh'}} />
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="fields">

            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {this.setState({term: e.target.value})}}
              placeholder="search anything on itunes"/>
            <input type="submit"
              value="Search"
             style={{position:'relative'}}
              class="ui blue button"/>


          </div>
        </form>
      </div>


    );
  }
}

export default SearchBar;
