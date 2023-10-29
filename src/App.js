import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Programming from './components/Programming';
import Covid19 from './components/Covid19';
import SavedNews from './components/SavedNews';
import Search from './components/Search';
import Indonesia from './components/Indonesia';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Indonesia />} />
            <Route path="/programming" element={<Programming keyword="programming" />} />
            <Route path="/covid-19" element={<Covid19 keyword="COVID-19" />} />
            <Route path="/saved" element={<SavedNews />} />
            <Route path="/search/:keyword" element={<Search />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
