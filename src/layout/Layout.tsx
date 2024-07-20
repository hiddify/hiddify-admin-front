import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Stepper from '../components/Stepper';

type TProps = {
  handleThemeToggle: VoidFunction;
  isDarkMode: boolean;
};

const Layout: React.FC<TProps> = ({ handleThemeToggle, isDarkMode }) => {
  return (
    <div>
      <IconButton
        style={{ position: 'absolute', top: 10, right: 10 }}
        onClick={handleThemeToggle}
        color='inherit'
      >
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <AppBar position='static'>
        <Stepper />
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Link to='/' style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>
            Home
          </Link>
          <Link to='/about' style={{ color: 'white', textDecoration: 'none' }}>
            About
          </Link>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
