import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={
      term:''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
    
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            onChange={e=>this.setState({term:e.target.value})}
            type="text"
            value={this.state.term}
            className="form-control"
            placeholder="Enter a city to get forecast"
          />
          <div className="input-group-btn">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather},dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);
