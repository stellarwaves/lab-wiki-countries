import React, { Component } from 'react';
import countries from '../data/countries.json'

class CountryDetail extends Component {
   
   render () {
      const country = countries.filter((item) => {
         return item.cca3 === this.props.match.params.cca3
      })[0]
      console.log(country.name)

      return(
        <div>
            <h1>{country.name.common}</h1>
        </div>
      )
   }
}

export default CountryDetail;