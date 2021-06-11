import React, { useState } from "react";
import StateWise from "./StateWise";
import Cards from "./Cards";
import Carousels from "./Carousels";
import "./Main.css";
import Stats from "./Stats";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import Footer from "./Footer";
import { useStateValue } from "./StateProvider";

function Main() {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);

  const [image, setImage] = useState(
    "https://image.flaticon.com/icons/png/128/2736/2736044.png"
  );
  return (
    <div className="main">
      <div className="main_header">
        <h1>Find all shops and services near you</h1>
        <Button className="main_downloadNow">Download app</Button>
      </div>
      <div>
        <img className="main_connected" src="/image/mainConnected.png"></img>
      </div>
      <div className="main_whatWeDo">
        <div className="main_written">
          <Card
            className="main_card"
            onClick={() => {
              setImage(
                "https://image.flaticon.com/icons/png/128/2736/2736044.png"
              );
            }}
          >
            <CardContent className="main_cardHeading">
              Advertize your shops
            </CardContent>
            <Typography className="main_cardContent">
              You can display your services in our app so that users can service
              see you services and contact you directly
            </Typography>
          </Card>
          <Card
            className="main_card"
            onClick={() => {
              setImage(
                "https://image.flaticon.com/icons/png/128/2304/2304241.png"
              );
            }}
          >
            <CardContent className="main_cardHeading">
              Advertize your shops
            </CardContent>
            <Typography className="main_cardContent">
              You can display your services in our app so that users can service
              see you services and contact you directly
            </Typography>
          </Card>
          <Card
            className="main_card"
            onClick={() => {
              setImage(
                "https://image.flaticon.com/icons/png/128/3002/3002827.png"
              );
            }}
          >
            <CardContent className="main_cardHeading">
              Advertize your shops
            </CardContent>
            <Typography className="main_cardContent">
              You can display your services in our app so that users can service
              see you services and contact you directly
            </Typography>
          </Card>
        </div>
        <div className="main_graphic">
          <img className="main_graphicImage" src={image}></img>
        </div>
      </div>

      <Stats></Stats>
      <div className="main_downloadRequest">
        <h1>Download the Amravati Express Mobile app</h1>
        <Button
          className="main_downloadNow"
          variant="outlined"
          onClick={() => {
            // setShow(true);
          }}
        >
          Download now
        </Button>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default Main;
{
  /* <Carousels/>
             {/* main div including cards */
}
{
  /* <Cards/> */
}

{
  /* india api */
}
{
  /* <div className="text-center">
                 <h1 className="abc">INDIA COVID DATA</h1>
             </div> */
}
{
  /* <StateWise/>  */
}
