import React from "react";
import SearchBar from "./SearchBar";

/*  create a functional component
// const App = () => {
//     return(
//         <div classname="ui container" style={{marginTop: '10px'}}>
//             <SearchBar />
//         </div>
//     );
 }; */


class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term)
  }  

  render() {
    return (
      <div classname="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
