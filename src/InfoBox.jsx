import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import hotImage from "./assets/hot.png";
import coldImage from "./assets/cold.png";
import rainImage from "./assets/rain.png";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import "./InfoBox.css";

const InfoBox = ({ info }) => {
  return (
    <div className="InfoBox">
      {/* <h1>Weather Info:{info.weather}</h1> */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80
              ? rainImage
              : info.temperature > 15
              ? hotImage
              : coldImage
          }
          title="weather"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{" "}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temperature > 15 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography
            variant="body2"
            lineHeight={2}
            sx={{ color: "text.secondary" }}
          >
            Temperature = {info.temperature}
          </Typography>
          <Typography
            variant="body2"
            lineHeight={2}
            sx={{ color: "text.secondary" }}
          >
            Humidity = {info.humidity}
          </Typography>
          <Typography
            variant="body2"
            lineHeight={2}
            sx={{ color: "text.secondary" }}
          >
            Min Temp= {info.tempMin}
          </Typography>
          <Typography
            variant="body2"
            lineHeight={2}
            sx={{ color: "text.secondary" }}
          >
            Max Temp= {info.tempMax}
          </Typography>
          <Typography
            variant="body2"
            lineHeight={2}
            sx={{ color: "text.secondary" }}
          >
            The Weather can be described as <i>{info.weather}</i> and feels like{" "}
            <b>{info.feelsLike}&deg;C </b>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoBox;
