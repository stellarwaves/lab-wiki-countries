import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import countries from './data/countries.json'
import Country from './components/Country';
import { Route } from "react-router-dom";
import CountryDetail from './components/CountryDetail';



class App extends Component {
  // state = {
  //   countriesList: countries
  // }

  // countries = () => {
  //   return this.state.countriesList.map((item, index) => {
  //     return <Country
  //               key ={`id${index}`}
  //               flag={item.flag}
  //               name={item.name.common}
  //               link={item.cca3}
  //             />      
  //   })
  // }


  render() {
    return (

      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <h1>WikiCountries</h1>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="list-group">
                <Route exact path='/' component={Country}></Route>
                <Route exact path='/detail/:cca3' component={CountryDetail}></Route>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    );
  }
}

export default App;
