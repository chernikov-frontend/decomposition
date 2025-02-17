import Header from "./components/Header";
import Search from "./components/Search";
import NewsList from "./components/NewsList";
import StockRates from "./components/StockRates";
import Banner from "./components/Banner";
import Weather from "./components/Weather";
import Popular from "./components/Popular";
import TVSchedule from "./components/TVSchedule";
import LiveBroadcast from "./components/LiveBroadcast";
import "./App.css"; 

const App = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <NewsList />
      <StockRates />
      <Banner />

      {/* Двухколоночный контент */}
      <div className="main-content">
        <div>
          <Weather />
          <Popular />
        </div>
        <div className="sidebar">
          <TVSchedule />
          <LiveBroadcast />
        </div>
      </div>
    </div>
  );
};

export default App;
