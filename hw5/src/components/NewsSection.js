//! Компонент, отвечающий за раздел "Новости"
import "../styles/NewsSection.scss";

import React from 'react'
import NewsItem from "./NewsItem";
import HorizontalList from "./HorizontalList";
import CurrencyRate from "./CurrencyRate";

function NewsSection() {
  const news = [
    {
      id: 1,
      img: null,
      link: "https://yandex.ru/",
      text: "bla bla bla",
    },
    {
      id: 2,
      img: null,
      link: "https://yandex.ru/",
      text: "bla bla bla 2",
    },
    {
      id: 3,
      img: null,
      link: "https://yandex.ru/",
      text: "bla bla bla 3",
    },
    {
      id: 4,
      img: null,
      link: "https://yandex.ru/",
      text: "bla bla bla 4",
    },
    {
      id: 5,
      img: null,
      link: "https://yandex.ru/",
      text: "bla bla bla 5",
    },
  ];

  const sections = [
    {
      id: 5,
      link: "https://yandex.ru/",
      text: "Сейчас в СМИ",
    },
    {
      id: 2,
      link: "https://yandex.ru/",
      text: "в Германии",
    },
    {
      id: 1,
      link: "https://yandex.ru/",
      text: "Рекомендуем",
    },
  ];

  return (
    <div className="news">
      <div className="news__sections">
        <HorizontalList sel="sections__list" items={sections} />
        <span className="date">2022</span>
      </div>
      <ul className="news-list">
        {news.map((item) => {
          return <NewsItem key={item.id} {...item} />;
        })}
      </ul>
      <ul className="rates">
        <CurrencyRate type="USD" />
        <CurrencyRate type="EUR" />
        <CurrencyRate type="Нефть" />
      </ul>
    </div>
  );
};

export default NewsSection;
