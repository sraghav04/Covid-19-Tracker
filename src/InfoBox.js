import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
function infoBox({ title, cases, total }) {
  return (
    <div>
      <Card className="infoBox">
        <CardContent>
          <Typography className="infoBox_title" color="textSecondary">
            {title}
          </Typography>
          <h2 className="infoBox_cases">{cases}</h2>
          <Typography className="infoBox_total" color="textSecondary">
            {total}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default infoBox;

{
  /* <div className="infoBox1">
        <h2>Coronaviru cases</h2>
        <h3>+2000</h3>
        <h3>1.2M</h3>
      </div>
      <div className="infoBox1">
        <h2>Recovered</h2>
        <h3>+2000</h3>
        <h3>1.2M</h3>
      </div>
      <div className="infoBox1">
        <h2>Deaths</h2>
        <h3>+2000</h3>
        <h3>1.2M</h3>
      </div> */
}
