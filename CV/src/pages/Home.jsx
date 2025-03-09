import React from 'react';
import { Container, Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Skills:</Typography>
          <List>
            <ListItem><ListItemText primary="HTML, CSS, SCSS" /></ListItem>
            <ListItem><ListItemText primary="JavaScript, React, jQuery, AJAX" /></ListItem>
            <ListItem><ListItemText primary="Webpack, 3D techologies" /></ListItem>
          </List>
          <Typography variant="h6">Education:</Typography>
          <Typography>Mykolaiv Lyceum No. 2, Front-End development courses</Typography>
          <Typography variant="h6">Experience:</Typography>
          <Typography>Project development using modern web technologies</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Home;
