import React from 'react'
import PropTypes from 'prop-types'

function Popular({title, text})  {
  return (
    <div>
      <span>{title}</span>&nbsp;-&nbsp;
      <span>{text}</span>
    </div>
  );
}

Popular.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default Popular
