import React from "react";

/* aqui será criado um class component 
por que será utilizado state
*/

class SearchBar extends React.Component {
// uncontrolled element    
//   onInputChange(event) {
//     console.log(event.target.value);
//   }

//controlled element
  state = {term: ''};

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* Não colocamos parenteses onde quer
             que passamos uma função de callback */}
            {/* <input type="text" onChange={this.onInputChange} /> */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
