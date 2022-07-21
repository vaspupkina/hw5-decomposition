//! Компонент, отвечающий за отдельный раздел в горизонтальных

import "../styles/Link.scss";

const Link = (props) => {
  const { link, text } = props;
  return (
    <li className="section">
      <a href={link}>{text}</a>
    </li>
  );
};

export default Link;
