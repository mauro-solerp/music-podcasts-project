import { Card } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import "./PodcastCard.css";
import { useNavigate } from "react-router";

const PodcastCard = (podcast) => {
  let navigate = useNavigate();
  const podcastData = podcast.data;
  const id = podcastData.id.attributes["im:id"];
  const author = podcastData["im:artist"].label;
  const title = podcastData["im:name"].label;
  const image = podcastData["im:image"][2].label;
  const handleCardClick = () => {
    navigate(`/podcast/${id}`);
  };
  return (
    <div>
      <Card
        style={{ padding: "5px" }}
        className="podcast-card"
        onClick={handleCardClick}
      >
        <img
          className="podcast-image"
          src={image}
          alt="Descripción de la imagen"
        />
        <div className="podcast-details">
          <Typography variant="h5" component="div" noWrap>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author: {author}
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default PodcastCard;
