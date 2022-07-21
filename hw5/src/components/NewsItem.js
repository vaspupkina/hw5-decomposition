import "../styles/NewsItem.scss";
import React from 'react'
import PropTypes from 'prop-types'

function NewsItem({link, image, text}) {
  return (
    <li className="news-item">
      <a href={link}>
        <img src={image} alt="Иконка" />
        <span>{text}</span>
      </a>
    </li>
  );
};

NewsItem.propTypes = {
  link : PropTypes.string,
  image: PropTypes.string,
  text : PropTypes.string
}

export default NewsItem