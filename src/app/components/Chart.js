import React from "react";
import {Doughnut} from 'react-chartjs-2';

import { getChart } from '../utils/api';

export class Chart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      chartData: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }
  getChartData() {
    console.log("getChartDataworking");
    getChart(this.props.params.id, (res)=> {
     console.log("client working");
      this.setState({
        title: res.title,
        chartData: {
          labels: [res.data],
          datesets: [{
            label: 'Votes',
            data: [res.value],
            backgroundColor: [res.colors]
          }],
        }
      });
    });
  }

  handleClick(e){

  }

  componentWillMount() {
    console.log(this.props.params.id);
  this.getChartData();
  }

  render() {
    return (
      <div className="container">
      <div className="jumbotron row">
      <div className="col-4">
      <select>
      {this.state.chartData.labels.map((data, i)=>{
        return (
          <option key={i} id={i} value={data} onClick={this.handleClick}>{data}</option>
        );
      })}
      </select>
      </div>
      <div className="col-8">
      <Doughnut data={this.state.chartData}
      options={{
        title: {
          display: true,
          text: this.state.title,
          fontSize: 25
        },
        legend: {
          position: "bottom"
        },
      		maintainAspectRatio: false
      	}}
      />
      </div>
      </div>
      </div>
    );
  }
}
