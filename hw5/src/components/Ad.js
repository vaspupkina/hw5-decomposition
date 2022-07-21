import React from 'react'
import PropTypes from 'prop-types'

function Ad({text, image, link}) {
  return (<div>
      <a href={link}>
        <img src={image} alt={text} />
        <p>{text}</p>        
      </a>
    </div>
  );
}

Ad.propTypes = {
  text : PropTypes.string,
  image : PropTypes.string,
  link : PropTypes.string
}

export default Ad