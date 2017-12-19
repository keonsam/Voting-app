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
      chartData: {
        labels: [],
        datasets: [],
      }
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  getChartData() {
    getChart(this.props.match.params.id, (res)=> {
      this.setState({
        title: res.title,
        chartData: {
          labels: res.data,
          datasets: [{
            label: 'Votes',
            data: res.value,
            backgroundColor: res.colors
          }],
        }
      });
    });
  }

  handleChange(e) {
  this.setState({
    index: e.target.value
  });
  }

  onSubmit(e) {
    e.preventDefault();
    postValue(this.props.match.params.id,this.state.index,(res)=>{
      this.getChartData();
    });
  }

  componentDidMount() {
  this.getChartData();
  }

  render() {
   console.log(this.state.chartData);
    return (
      <div className="jumbotron row">
      <div className="col-12 col-sm-12 col-lg-5 text-center">
      <form onSubmit={this.onSubmit}>
      <label htmlFor="options">Choose Your Option:</label><br/>
      <select onChange={this.handleChange}>
      {
      this.state.chartData.labels.map((data, i)=>{
        return (
          <option key={i} id={i} value={i}>{data}</option>
        );
      })
    }
      </select><br/>
      <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      </div>
      <div className="col-12 col-sm-12 col-lg-7">
      <Doughnut data={this.state.chartData}
      options={{
        title: {
          display: true,
          text: this.state.title,
          fontSize: 25
        },
        legend: {
          position: "bottom"
        }
      	}}
      />
      </div>
      </div>
    );
  }
}
