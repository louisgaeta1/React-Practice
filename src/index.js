import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyARYQv6aqrPCpkukslpcCXMVtbw6gWmkVc";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );  
}

ReactDOM.render(<App />, document.querySelector('.container'));
