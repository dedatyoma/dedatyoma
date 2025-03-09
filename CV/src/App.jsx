import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import Swapi from './pages/SwapiPage'
import Todo from './pages/TodoPage'

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        minHeight: '100vh',
        minWidth: '100hw'
      }}>
        <Header />
        <Box component="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/swapi" element={<Swapi />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
