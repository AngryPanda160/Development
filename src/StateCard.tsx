import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { StateData } from "./electoralData";

export default function StateCard({
  stateData,
  selected,
  toggleSelected,
}: {
  stateData: StateData;
  selected: boolean;
  toggleSelected: () => void;
}) {
  // All state images sourced from Wikipedia
  const totalVotes =
    stateData.votes.biden + stateData.votes.trump + stateData.votes.other;
  const totalElectors = stateData.electors.biden + stateData.electors.trump;
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        height="300"
        style={{ objectFit: "contain" }}
        image={process.env.PUBLIC_URL + "/images/" + stateData.name + ".png"}
        alt={"County map of " + stateData.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {stateData.name}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          {"Region: " + stateData.region}
        </Typography>
        <Typography>
          {totalElectors} electors
          {" (Biden: " +
            stateData.electors.biden +
            " Trump: " +
            stateData.electors.trump +
            ")"}
        </Typography>
        <Typography>
          Population: {stateData.population.toLocaleString("en-US")}
        </Typography>
        <Typography sx={{ color: "blue" }}>
          Biden:{" "}
          {Math.round((stateData.votes.biden / totalVotes) * 10000) / 100 +
            "%, (" +
            stateData.votes.biden.toLocaleString("en-US") +
            " votes)"}
        </Typography>
        <Typography sx={{ color: "red" }}>
          Trump:{" "}
          {Math.round((stateData.votes.trump / totalVotes) * 10000) / 100 +
            "%, (" +
            stateData.votes.trump.toLocaleString("en-US") +
            " votes)"}
        </Typography>
        <Typography sx={{ color: "orange" }}>
          Other:{" "}
          {Math.round((stateData.votes.other / totalVotes) * 10000) / 100 +
            "%, (" +
            stateData.votes.other.toLocaleString("en-US") +
            " votes)"}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "relative", bottom: "0px" }}>
        <Button
          size="small"
          onClick={toggleSelected}
          variant={selected ? "contained" : "outlined"}
        >
          {selected ? "Remove from Selection" : "Add to Selection"}
        </Button>
      </CardActions>
    </Card>
  );
}
