import {Component} from 'react'
import {
  AiFillCheckCircle,
  RiErrorWarningFill,
  MdWarning,
  MdInfo,
  GrFormClose,
} from 'react-icons/all'

import './index.css'

const icons = {
  success: <AiFillCheckCircle className="icon-ele success" />,
  error: <RiErrorWarningFill className="icon-ele error" />,
  warning: <MdWarning className="icon-ele warning" />,
  info: <MdInfo className="icon-ele info" />,
  close: <GrFormClose className="close-ele" />,
}

export default class Notification extends Component {
  render() {
    const {
      children: {id, iconType, messageName, messageDes},
    } = this.props
    console.log(id, iconType, messageName, messageDes)
    return (
      <li className="alert-list-container">
        {icons[iconType]}
        <div className="alert-message-container">
          <h1 className={`alert-message-name ${iconType}`}>{messageName}</h1>
          <p className="alert-message-des">{messageDes}</p>
        </div>
        {icons.close}
      </li>
    )
  }
}
