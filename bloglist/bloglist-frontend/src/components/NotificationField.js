import React from 'react'
import { useSelector } from 'react-redux'

const NotificationField = () => {
  const notification = useSelector(s => s.notification)
  return notification
    ? <div className="notificationField">
        {notification}
      </div>
    : <div />
}

export default NotificationField