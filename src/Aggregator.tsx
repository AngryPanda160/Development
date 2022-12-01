import React from "react";
import { electionData } from "./electoralData";
import { Box, Grid, Typography } from "@mui/material";
import USMap from "USMap";

export default function Aggregator({
  selectedStates,
}: {
  selectedStates: Set<string>;
}) {
  let selectBidenVotes = 0;
  let selectTrumpVotes = 0;
  let selectOtherVotes = 0;
  let selectBidenEV = 0;
  let selectTrumpEV = 0;
  selectedStates.forEach((state) => {
    let thisData = electionData.find((data) => data.name === state);
    if (thisData) {
      selectBidenVotes += thisData.votes.biden;
      selectTrumpVotes += thisData.votes.trump;
      selectOtherVotes += thisData.votes.other;
      selectBidenEV += thisData.electors.biden;
      selectTrumpEV += thisData.electors.trump;
    }
  });
  if (selectedStates.size === 0) {
    selectBidenVotes = 81281916;
    selectTrumpVotes = 74223366;
    selectOtherVotes = 2872752;
    selectBidenEV = 306;
    selectTrumpEV = 232;
  }
  const selectTotalVotes =
    selectBidenVotes + selectTrumpVotes + selectOtherVotes;
  const selectBidenEVPercent =
    (selectBidenEV / (selectBidenEV + selectTrumpEV || 1)) * 100;

  return (
    <>
      <Box
        position="sticky"
        top="0"
        sx={{ py: 1, mr: 3, background: "white", zIndex: 1000 }}
      >
        <Grid container alignItems="center">
          <Grid item lg={3} xs={4}>
            <Typography variant="h4">Electoral College: </Typography>
          </Grid>
          <Grid item lg={9} xs={8}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h5" sx={{ color: "blue" }}>
                Biden:{" "}
                {selectBidenEV +
                  " (" +
                  Math.round(selectBidenEVPercent * 100) / 100 +
                  "%)"}
              </Typography>
              <Typography variant="h5" sx={{ color: "red" }}>
                Trump:{" "}
                {selectTrumpEV +
                  " (" +
                  Math.round((100 - selectBidenEVPercent) * 100) / 100 +
                  "%)"}
              </Typography>
            </Box>
            <svg width="100%" height="30">
              <rect
                width={"100%"}
                height="30"
                z-index="0"
                style={{
                  fill: "rgb(255,0,0)",
                  strokeWidth: 1,
                  stroke: "rgb(0,0,0)",
                }}
              />
              <rect
                width={selectBidenEVPercent + "%"}
                height="30"
                z-index="1"
                style={{
                  fill: "rgb(0,0,255)",
                  strokeWidth: 1,
                  stroke: "rgb(0,0,0)",
                }}
              />
            </svg>
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item lg={3} xs={4}>
            <Typography variant="h4">Popular Vote: </Typography>
          </Grid>
          <Grid item lg={9} xs={8}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h5" sx={{ color: "blue" }}>
                Biden:{" "}
                {selectBidenVotes.toLocaleString("en-US") +
                  " (" +
                  Math.round((selectBidenVotes / selectTotalVotes) * 10000) /
                    100 +
                  "%)"}
              </Typography>
              <Typography variant="h5" sx={{ color: "red" }}>
                Trump:{" "}
                {selectTrumpVotes.toLocaleString("en-US") +
                  " (" +
                  Math.round((selectTrumpVotes / selectTotalVotes) * 10000) /
                    100 +
                  "%)"}
              </Typography>
            </Box>
            <svg width="100%" height="30">
              <rect
                width={"100%"}
                height="30"
                style={{
                  fill: "rgb(255,0,0)",
                  strokeWidth: 1,
                  stroke: "rgb(0,0,0)",
                }}
              />
              <rect
                width={
                  ((selectBidenVotes + selectOtherVotes) / selectTotalVotes) *
                    100 +
                  "%"
                }
                height="30"
                style={{
                  fill: "yellow",
                  strokeWidth: 1,
                  stroke: "rgb(0,0,0)",
                }}
              />
              <rect
                width={(selectBidenVotes / selectTotalVotes) * 100 + "%"}
                height="50"
                style={{
                  fill: "rgb(0,0,255)",
                  strokeWidth: 1,
                  stroke: "rgb(0,0,0)",
                }}
              />
            </svg>
          </Grid>
        </Grid>
        <Typography>
          {selectedStates.size}/51 selected,{" "}
          {selectedStates.size ? selectBidenEV + selectTrumpEV : 0}/538
          electoral votes,{" "}
          {selectedStates.size ? selectTotalVotes.toLocaleString("en-US") : 0}
          /158,378,034 total votes
          {" (" +
            Math.round((selectTotalVotes / 158378034) * 10000) / 100 +
            "%)"}
        </Typography>
      </Box>{" "}
      <USMap selected={selectedStates} />
    </>
  );
}
