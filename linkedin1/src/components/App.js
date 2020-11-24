import React, { Component } from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments'
import SearchAppointments from './SearchAppointments'
import ListAppointments from './ListAppointments'
import {without} from 'lodash';


class App extends Component {

  constructor() {
    super();
    this.state = {
      name: 'Brad ',
      appointments: [],
      formDisplay: false,
      lastIdx: 0
    };
    // bind proper value of class 'this' statement instead of form version of 'this'
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleApptForm = this.toggleApptForm.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
  }

  toggleApptForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  addAppointment(apt){
    let tempApt = this.state.appointments;
    apt.aptId = this.state.lastIdx;
    tempApt.unshift(apt);
    this.setState({
      appointments: tempApt,
      lastIdx: this.state.lastIdx + 1,
    })
 }
  deleteAppointment(apt) {
    let tempApts = this.state.appointments;
    tempApts = without(tempApts, apt);

    this.setState({
      appointments: tempApts
    })
  }

  componentDidMount() {
    fetch('./data.json')
      .then(resp => resp.json())
      .then(result => {
        const appts = result.map(item => {
          item.aptId = this.state.lastIdx;
          this.setState({lastIdx: this.state.lastIdx + 1})
          return item
        })
        this.setState({
          appointments: appts
        });
      });
  }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments
                  formDisplay={this.state.formDisplay}
                  toggleApptForm={this.toggleApptForm}
                  addAppointment={this.addAppointment}
                  />
                <SearchAppointments />
                <ListAppointments 
                  appointments={this.state.appointments} 
                  deleteAppointment={this.deleteAppointment}
                  />
              </div>
            </div>
            </div>
          </div>
      </main>
    );
  }
}

export default App;
