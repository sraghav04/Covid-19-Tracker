// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Header from "./Header";
import Map from "./Map";
import Sidebar from "./Sidebar";
import { Card, CardContent } from "@material-ui/core";
function App() {
  return (
    // BEM Convention
    <div className="app">
      <div className="app_left">
        <Header />
        <Map />
      </div>
      <Card className="app_right">
        <CardContent>
          <Sidebar />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

{
  /* <div className="app_stats">
          <InfoBox
            title="Coronavirus cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />
          <InfoBox
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <InfoBox
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div> */
}
