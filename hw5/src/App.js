import './App.css';
import Ad from './components/Ad';
import Block from './components/Block';
import NewsSection from './components/NewsSection';
import Popular from './components/Popular';
import SearchComponent from './components/SearchComponent';
import TV from './components/TV';

const popularData = [
  { id: 1, title: "ЗооМир", text: "о божьих коровках" },
  { id: 2, title: "Мультики", text: "лелик и болик" },
  { id: 3, title: "Фильмы", text: "особенности национальной русской охоты" },
];

const tvData = [
  { id: 5, time: "06:00", showName: "Доброе утро!", channel: "Первый" },
  { id: 6, time: "09:00", showName: "Simpsons", channel: "2x2" },
  { id: 7, time: "18:00", showName: "Новости", channel: "ВГТРК" },
];

const liveData = [
  { id: 1001, showName: "Comedy Battle", channel: "ТНТ" },
  { id: 1002, showName: "КВН", channel: "OPT" },
  { id: 1003, showName: "Галилео", channel: "CTC" },
];


function App() {
  return (
    <div className="app">
      <div className="top">
        <NewsSection />
        <Ad url={"https://yandex.ru/"} />
      </div>
      <SearchComponent />
      <Ad url={"https://www.google.ru/"} />
      <div className="bottom">
        <Block title="Погода" sel="weather">
          <div className="temp">
            <img src="#" alt="Иконка погоды" />
            <span className="temp-now">+17°</span>
            <div className="temp-other">
              <span className="temp-morning">+17,</span>
              <span className="temp-day">+20</span>
            </div>
          </div>
        </Block>
        <Block title="Посещаемое" sel="visited">
          {popularData.map((item) => {
            return <Popular key={item.id} {...item} />;
          })}
        </Block>
        <Block title="Карта Германии" sel="map">
          <span>Расписания</span>
        </Block>
        <Block title="Телепрограмма" sel="broadcast">
          <button type="button">Эфир</button>
          {tvData.map((item) => {
            return <TV key={item.id} {...item} />;
          })}
        </Block>
        <Block title="Эфир" sel="on-live">
          {liveData.map((item) => {
            return <TV key={item.id} {...item} />;
          })}
        </Block>
      </div>
    </div>
  );
}

export default App;
