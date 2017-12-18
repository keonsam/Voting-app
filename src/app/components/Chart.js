import React from "react";
import {Chart} from "chart.js";
import {Doughnut} from 'react-chartjs-2';

import { getChart } from '../utils/api';
import { postValue } from '../utils/api';

export class ChartTab extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      title: '',
      refresh: false,
      chartData: {
        labels: [],
        datesets: [],
      }
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  getChartData() {
    getChart(this.props.match.params.id, (res)=> {
      console.log("testing");
      console.log(res);
      this.setState({
        title: res.title,
        chartData: {
          labels: res.data,
          datesets: [{
            label: 'Votes',
            data: res.value,
            backgroundColor: res.colors
          }],
        }
      });
    });
    console.log(this.state.chartData.datesets.data)
  }

  handleChange(e) {
  this.setState({
    index: e.target.value
  });
  }

  onSubmit(e) {
    e.preventDefault();
    postValue(this.props.match.params.id,this.state.index,(res)=>{
      this.setState({
        refresh: true
      });
    });
  }

  componentWillMount() {
  this.getChartData();
  }

  render() {
    return (
      <div className="container">
      <div className="jumbotron row">
      <div className="col-4">
      <form onSubmit={this.onSubmit}>
      <select onChange={this.handleChange}>
      {
      this.state.chartData.labels.map((data, i)=>{
        return (
          <option key={i} id={i} value={i}>{data}</option>
        );
      })
    }
      </select>
      <button className="btn btn-primary" type="submit">Submit</button>
      </form>
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
