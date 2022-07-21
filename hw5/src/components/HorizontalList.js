import "../styles/HorizontalList.scss";

import React from 'react'
import PropTypes from 'prop-types'
import Link from "./Link";

function HorizontalList({sel, items}) {
  return (
    <ul className={sel}>
      {items.map((item) => {
        return <Link key={item.id} link={item.link} text={item.text} />;
      })}
    </ul>
  );
};

HorizontalList.propTypes = {
  sel : PropTypes.string,
  items : PropTypes.array
}

export default HorizontalList