import "./App.css";
import React, { useState } from "react";
import { electionData, StateData } from "./electoralData";
import StateCard from "./StateCard";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Aggregator from "Aggregator";

function App() {
  const [regionFilter, setRegionFilter] = useState("");
  const [popFilter, setPopFilter] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(false);
  const [sortMetric, setSortMetric] = useState("alph");
  const [sortAscending, setSortAscending] = useState("asc");
  const [selectedStates, setSelectedStates] = useState<Set<string>>(
    new Set<string>()
  );

  let popLabels: {
    [size: string]: string;
  } = {
    xs: "Under 2 million",
    sm: "2-5 million",
    md: "5-10 million",
    lg: "Over 10 million",
  };

  const getPercentage = (data: StateData) => {
    const totalVotes = data.votes.biden + data.votes.trump + data.votes.other;
    const percent = data.votes.trump / totalVotes;
    return percent;
  };
  let filteredList = electionData;
  if (regionFilter) {
    filteredList = filteredList.filter((data) => data.region === regionFilter);
  }
  if (popFilter) {
    filteredList = filteredList.filter((data) => {
      let size = "xs";
      if (data.population > 10000000) {
        size = "lg";
      } else if (data.population > 5000000) {
        size = "md";
      } else if (data.population > 2000000) {
        size = "sm";
      }
      return popFilter === size;
    });
  }
  if (selectedFilter) {
    filteredList = filteredList.filter((data) => selectedStates.has(data.name));
  }

  if (sortMetric === "alph") {
    filteredList.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  } else {
    filteredList.sort((a, b) => {
      if (sortMetric === "vote") {
        return getPercentage(a) - getPercentage(b);
      } else {
        return a.population - b.population;
      }
    });
  }
  if (sortAscending === "desc") {
    filteredList.reverse();
  }

  const resetFilters = () => {
    setRegionFilter("");
    setPopFilter("");
    setSelectedFilter(false);
    setSortMetric("alph");
    setSortAscending("asc");
  };

  const selectAll = () => {
    let newSelected = new Set<string>();
    electionData.forEach((data) => newSelected.add(data.name));
    setSelectedStates(newSelected);
  };
  return (
    <>
      <Box mt={2} mx={2}>
        <Typography variant="h3">2020 Election Selector</Typography>
        <Typography variant="subtitle1">
          Select certain states to see how the 2020 presidential election would
          have ended if only those states had been included
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={3}>
          <Box sx={{ pt: 2 }}>
            <Button sx={{ mx: 3 }} variant="outlined" onClick={resetFilters}>
              Reset filters/sorting
            </Button>
            <Box m={3}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Filters
              </Typography>
              <FormLabel id="region-label" component="legend">
                Filter by Region
              </FormLabel>
              <RadioGroup
                aria-labelledby="region-label"
                name="region-buttons"
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
              >
                <FormControlLabel
                  value={""}
                  control={<Radio />}
                  label={"All Regions"}
                />
                {["Northeast", "Midwest", "South", "West"].map((regionName) => (
                  <FormControlLabel
                    key={regionName}
                    value={regionName}
                    control={<Radio />}
                    label={regionName}
                  />
                ))}
              </RadioGroup>
              <FormLabel id="pop-label" component="legend">
                Filter by Population
              </FormLabel>
              <RadioGroup
                aria-labelledby="pop-label"
                name="pop-buttons"
                value={popFilter}
                onChange={(e) => setPopFilter(e.target.value)}
              >
                <FormControlLabel
                  value={""}
                  control={<Radio />}
                  label={"All Sizes"}
                />
                {["xs", "sm", "md", "lg"].map((size) => (
                  <FormControlLabel
                    key={size}
                    value={size}
                    control={<Radio />}
                    label={popLabels[size]}
                  />
                ))}
              </RadioGroup>
            </Box>
            <Box m={3}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Sorting
              </Typography>

              <FormLabel id="sort-label">Sorting Metric</FormLabel>
              <RadioGroup
                aria-labelledby="sort-label"
                name="sort-buttons"
                value={sortMetric}
                onChange={(e) => setSortMetric(e.target.value)}
              >
                <FormControlLabel
                  value="alph"
                  control={<Radio />}
                  label="Alphabetical"
                />
                <FormControlLabel
                  value="vote"
                  control={<Radio />}
                  label="Election Percentage (Trump)"
                />
                <FormControlLabel
                  value="pop"
                  control={<Radio />}
                  label="Population"
                />
              </RadioGroup>
              <FormLabel id="direction-label">Sort Direction</FormLabel>
              <RadioGroup
                aria-labelledby="direction-label"
                name="direction-buttons"
                value={sortAscending}
                onChange={(e) => setSortAscending(e.target.value)}
              >
                <FormControlLabel
                  value="asc"
                  control={<Radio />}
                  label="Ascending"
                />
                <FormControlLabel
                  value="desc"
                  control={<Radio />}
                  label="Descending"
                />
              </RadioGroup>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Aggregator selectedStates={selectedStates} />
          <Box mr={3}>
            <Box display="flex">
              <Button variant="outlined" onClick={selectAll} sx={{ mr: 1 }}>
                Select All
              </Button>
              <Button
                onClick={() => setSelectedStates(new Set())}
                variant="outlined"
                sx={{ mr: 1 }}
              >
                Unselect All
              </Button>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.checked)}
                  />
                }
                label={"Show Selected Only"}
              />
            </Box>
          </Box>
          <Box display="flex" flexWrap="wrap" gap={3} mt={2} mx={1}>
            {filteredList.map((data) => (
              <StateCard
                key={data.name}
                stateData={data}
                selected={selectedStates.has(data.name)}
                toggleSelected={() => {
                  if (selectedStates.has(data.name)) {
                    let newSelected = new Set(selectedStates);
                    newSelected.delete(data.name);
                    setSelectedStates(newSelected);
                  } else {
                    let newSelected = new Set(selectedStates);
                    newSelected.add(data.name);
                    setSelectedStates(newSelected);
                  }
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
