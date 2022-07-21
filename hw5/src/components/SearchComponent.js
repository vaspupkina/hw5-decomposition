import "../styles/SearchComponent.scss";
import React from 'react'
import HorizontalList from "./HorizontalList";

function SearchComponent() {
  const sections = [
    {
      id: 5,
      link: "https://yandex.ru/",
      text: "Видео",
    },
    {
      id: 2,
      link: "https://yandex.ru/",
      text: "Картинки",
    },
    {
      id: 1,
      link: "https://yandex.ru/",
      text: "Новости",
    },
    {
      id: 4, 
      link: "https://yandex.ru/",
      text: "Карты",
    },
    {
      id: 7,
      link: "https://yandex.ru/",
      text: "Маркет",
    },
    {
      id: 8,
      link: "https://yandex.ru/",
      text: "Переводчик",
    },
    {
      id: 31337,
      link: "https://yandex.ru/",
      text: "Эфир",
    },
    {
      id: 31339,
      link: "https://yandex.ru/",
      text: "еще",
    },
  ];

  return (
    <div className="search">
      <HorizontalList sel="sections__list" items={sections} />
      <form className="form">
        <input type="search" className="form__field" />
        <button className="form__submit" type="submit">
          Найти
        </button>
      </form>
      <span>
        Найдется всё!
      </span>
    </div>
  );
};

export default SearchComponent