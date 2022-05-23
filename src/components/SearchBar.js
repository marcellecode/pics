import React from "react";

/* aqui será criado um class component 
por que será utilizado state
*/

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick() {
      console.log('Input was clicked')
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* Não colocamos parenteses onde quer
             que passamos uma função de callback */}
            <input type="text" onClick={this.onInputClick} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
