// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Header from "./Header";
import Map from "./Map";
import InfoBox from "./InfoBox";
import Sidebar from "./Sidebar";
import { Card, CardContent } from "@material-ui/core";
function App() {
  return (
    // BEM Convention
    <div className="app">
      <div className="app_left">
        <Header />
        <div className="app_stats">
          <InfoBox title="Coronavirus cases" cases="1200" total="1M" />
          <InfoBox title="Recovered" cases="1655" total="2M" />
          <InfoBox title="Deaths" cases="1091" total="16356" />
        </div>
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
