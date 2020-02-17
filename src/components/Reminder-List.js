import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from './Navbar'


const Reminder = props => (
  <tr>
    <td>{props.reminder.username}</td>
    <td>{props.reminder.description}</td>
    <td>{props.reminder.duration}</td>
    <td>{props.reminder.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.reminder._id}>edit</Link> | <a href="#" onClick={() => { props.deleteReminder(props.reminder._id) }}>delete</a>
    </td>
  </tr>
)

export default class RemindersList extends Component {
  constructor(props) {
    super(props);

    this.deleteReminder = this.deleteReminder.bind(this)

    this.state = {reminders: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3000/reminders/')
      .then(response => {
        this.setState({ reminders: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteReminder(id) {
    axios.delete('http://localhost:3000/reminders/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      reminders: this.state.reminders.filter(el => el._id !== id)
    })
  }

  reminderList() {
    return this.state.reminders.map(currentreminder => {
      return <Reminder reminder={currentreminder} deleteReminder={this.deleteReminder} key={currentreminder._id}/>;
    })
  }

  render() {
    return (
      <div>
          <NavBar />
        <h3>Logged Reminder</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.reminderList() }
          </tbody>
        </table>
      </div>
    )
  }
}