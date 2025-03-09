import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, CircularProgress, List, ListItem, ListItemText } from "@mui/material";

const Swapi = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((data) => {
      setCharacters(data.results);
        setLoading(false);
    })
    .catch((error) => {
      console.error("Error loading data:", error)
      setLoading(false);
  });
}, []);
  return(
    <Container>
      <Typography variant="h4" gutterBottom>
        Star Wars Characters
      </Typography>
      {loading ? (
        <CircularProgress/>
      ) : (
        <Card>
          <CardContent>
            <List>
              {characters.map((characters, index) => (
                <ListItem key={index}>
                  {<ListItemText primary={characters.name} secondary={`Height: ${characters.height} cm, Weight: ${characters.mass} kg`}></ListItemText>}
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}
    </Container>
  )
}

export default Swapi;