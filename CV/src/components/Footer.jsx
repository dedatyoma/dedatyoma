import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Email />
            <Link href="mailto:your.email@example.com" color="inherit">
              burdykinartem4@gmail.com
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <GitHub />
            <Link href="https://github.com/dedatyoma" color="inherit" target="_blank">
              GitHub
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LinkedIn />
            <Link href="https://www.linkedin.com/in/artom-burdykin-8b50a2290/" color="inherit" target="_blank">
              LinkedIn
            </Link>
          </Box>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
