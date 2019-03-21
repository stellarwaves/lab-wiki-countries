import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import countries from '../data/countries.json';



class Country extends Component {
   state = {
      countriesList: countries
    }
  
   countries = () => {
      return this.state.countriesList.map((item) => {
        return <Link to={`/detail/${item.cca3}`} key={item.cca3} className="list-group-item list-group-item-action">{item.flag}{item.name.common}</Link>  
      })
   }

   render (){
      return(
         <div>
            {this.countries()}
         </div>
      )
   }
}

export default Country;