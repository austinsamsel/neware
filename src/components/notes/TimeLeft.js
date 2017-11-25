import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import hourglass from '../../assets/hourglass.png'
import { s } from '../ui/Styles.js'

const icon_hourglass = {
  width: '16px',
  height: 'auto',
  marginRight: '6px',
  verticalAlign: '-3px'
}

const TimeLeft = props => {
  const aDay = 60 * 60 * 24 * 1000
  const createdAt = moment(props.createdAt)
  const deleteAt = createdAt + aDay
  const now = moment(new Date())
  const timeLeftSeconds = Math.abs(now.diff(deleteAt))
  const timeLeftHours = Math.abs(now.diff(deleteAt, 'hours'))
  const timeLeftMinutes = Math.abs(now.diff(deleteAt, 'minutes'))

  const timeLeft = () => {
    if (timeLeftSeconds < 1) {
      return 'Existing on borrowed time. About to be deleted.'
    }
    if (timeLeftMinutes < 2) {
      return `${timeLeftMinutes} minute left`
    }
    if (timeLeftHours < 1) {
      return `${timeLeftMinutes} minutes left`
    }
    if (timeLeftHours < 2) {
      return `${timeLeftHours} hour left`
    }
    return `${timeLeftHours} hours left`
  }

  return (
    <div data-c="TimeLeft">
      <p
        style={{
          ...s.ff_mono,
          ...s.lightseagreen
        }}
      >
        <img src={hourglass} alt="Timestamp" style={icon_hourglass} />
        {timeLeft()}
      </p>
    </div>
  )
}

TimeLeft.propTypes = {
  createdAt: PropTypes.number.isRequired
}

export default TimeLeft
