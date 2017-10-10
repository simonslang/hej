import "babel-polyfill";

import React, { Component } from 'react';
import {isFilterInArray} from 'utils/Helpers.js';
import withData from "utils/withData.js";
import withSelectedFilters from "utils/withSelectedFilters.js";
import FilterList from "components/FilterList.js"
import { withRouter, Link } from 'react-router-dom';


class Filter extends Component {
  constructor(props) {
    super(props);
    
    this.clickHandler = this.clickHandler.bind(this);
  }
  
  
  clickHandler(label, e) {
    e.preventDefault();
    
    this.props.setSelectedFilters(label)
    
    if(this.props.showStaticFilters) {
      this.props.history.push("/");
    }  
  }
  
  render() {
    return <FilterList {...this.props} />
  }
}





export default withRouter(withData(Filter,(DataStore, props) => DataStore.getFilters()));
