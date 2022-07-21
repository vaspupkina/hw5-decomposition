import React from 'react'
import PropTypes from 'prop-types'

function TV({time, showName, channel}) {
  return (
    <div className="channel">
      {time || "▶"} {showName} <span>{channel}</span>
    </div>
  );
}

TV.propTypes = {
  time : PropTypes.string.isRequired,
  showName : PropTypes.string.isRequired,
  channel : PropTypes.string.isRequired
}

export default TV;