import "../styles/CurrencyRate.scss";
import React from 'react'
import PropTypes from 'prop-types'

function CurrencyRate({type}) {
  return (
    <li className="rate">
      <span>{type} MOEX 63.2</span>
    </li>
  );
}

CurrencyRate.propTypes = {
  type : PropTypes.string
}

export default CurrencyRate