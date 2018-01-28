import React, { Component } from "react";
import { connect } from "react-redux";
import {v4} from 'uuid'

import Chart from "../components/chart";
import Maps from "../components/map";

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }
  renderList(weather) {
    return weather.map(w => {
      const temps = w.list.map(temp => temp.main.temp);
      const humidities = w.list.map(humidity => humidity.main.humidity);
      const pressures = w.list.map(pressure => pressure.main.pressure);
      const {lat,lon} = w.city.coord;

      return (
        <tr key={v4()}>
          <td>
          <Maps lat={lat} lon={lon} /> 
          </td>
          <td>
            <Chart color="red" data={temps} units="K" />
          </td>
          <td>
            <Chart color="yellow" data={pressures} units="hPa" />
          </td>
          <td>
            <Chart color="blue" data={humidities} units="%" />
          </td>
        </tr>
      );
    });
  }

  render() {
    const style = {
      marginTop: "20px"
    };
    return (
      <div style={style} className='text-center container-fluid'>
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="text-center">
              <td>City</td>
              <td>Temperature (K)</td>
              <td>Pressure (hPa)</td>
              <td>Humidity (%)</td>
            </tr>
          </thead>
          <tbody>{this.renderList(this.props.weather)}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps, null)(WeatherList);
