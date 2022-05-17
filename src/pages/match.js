import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { getMatches } from "../services/football";
import { fontFamily } from "@mui/system";

import { getScheduledMatches } from "../services/football";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: "auto",
  padding: "20px",
  width: "300px",
  fontFamily: "Roboto",
  border: "1px solid transparent",
  // borderRadius: "none"
}));

export default function Matches() {
  const [matches, setMatches] = useState([]);

  //
  useEffect(() => {
    const getAll = async () => {
      const result = await getMatches();
      console.log("result:", result);
      setMatches(result);
    };

    getAll();
  }, []);

  // scheduled matches
  const [schedMatches, setSchedMatches] = useState([]);
  useEffect(() => {
    const getAll = async () => {
      const result = await getScheduledMatches();
      console.log("result:", result);
      setSchedMatches(result);
    };

    getAll();
  }, []);

  return (
    <div className="matches-container">
      <h1>FINISHED MATCHES</h1>
      <div className="finished-matches">
        {matches.map((match) => {
          return (
            <Grid key={match.id} item xs="auto">
              <Item sx={{ backgroundColor: "#ccb3ff" }}>
                {match.homeTeam.name} {match.score.fullTime.homeTeam} -{" "}
                {match.score.fullTime.awayTeam} {match.awayTeam.name}
              </Item>
              <Item>
                <strong>Date: </strong>
                {match.utcDate}
              </Item>
              <Item>
                <strong>Competition: </strong>
                {match.competition.name} - {match.stage}
              </Item>
              <Item>
                <strong>Main referee: </strong> {match.referees[3].name}
              </Item>
            </Grid>
          );
        })}
      </div>
      <h1>SCHEDULED MATCHES</h1>
    
      <div className="scheduled-matches">
        {schedMatches.map((schedmatch) => {
          return (
            <Grid key={schedmatch.id} item xs="auto">
              <Item sx={{ backgroundColor: "#6ACDA9" }}>
                {schedmatch.homeTeam.name} - {schedmatch.awayTeam.name}
              </Item>
              <Item>
                <strong>Date: </strong>
                {schedmatch.utcDate}
              </Item>
              <Item>
                <strong>Competition: </strong>
                {schedmatch.competition.name} - {schedmatch.stage}
              </Item>
              <Item>
                <strong>Main referee: </strong> {schedmatch.referees}
              </Item>
            </Grid>
          );
        })}
      </div>
    </div>
  );
}
