import {Component} from 'react'
import './index.css'
import Notification from '../Notification'

const alertContainer = [
  {
    id: 1,
    iconType: 'success',
    messageName: 'Success',
    messageDes: 'You can access all the files in folder',
  },
  {
    id: 2,
    iconType: 'error',
    messageName: 'Error',
    messageDes: 'Sorry, you are not authorized to access to delete file',
  },
  {
    id: 3,
    iconType: 'warning',
    messageName: 'Warning',
    messageDes: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: 4,
    iconType: 'info',
    messageName: 'Info',
    messageDes: 'Anyone on the internet can view this file',
  },
]

export default class AlertNotifications extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="alert-not-main-container">
          <h1 className="alert-not-main-heading">Alert Notifications</h1>
          <ul className="alert-container">
            {alertContainer.map(item => (
              <Notification key={item.id}>{item}</Notification>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
