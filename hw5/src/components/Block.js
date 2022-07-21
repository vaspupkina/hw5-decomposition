import "../styles/Block.scss"
import React from 'react'
import PropTypes from 'prop-types'

function Block({title, sel, ...props}) {
  return (
    <div className={sel}>
      <a href="#">{title}</a>
      {props.children}
    </div>
  );
};

Block.propTypes = {
  title : PropTypes.string,
  sel : PropTypes.string
}
export default Block