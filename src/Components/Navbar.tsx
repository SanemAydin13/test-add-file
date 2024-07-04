import React, { MouseEvent } from 'react';
import { PaletteOptions } from '@mui/material/styles/createPalette';
import { Box, ThemeProvider, createTheme, Button, Menu, MenuItem } from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

interface CustomPaletteOptions extends PaletteOptions {
    customColors?: {
      light: string;
      select: string;
      dark: string;
    };
  }
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
      error: {
        main: '#f44336',
      },
      background: {
        default: '#fff',
        paper: '#f5f5f5',
      },
      // Define custom colors under theme.palette.customColors
      customColors: {
        light: '#D9D9D9', // ash
        select: '#A5A5A5', // selection color
        dark: '#414D59', // week color
      },
      action: {
        active: '#C70039', // red
      },
    } as CustomPaletteOptions, // Cast to CustomPaletteOptions to allow customColors
  });

const BasicMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ alignItems: 'center', top: 0 }}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: 'background.paper' }}
      >
        Hi, Admin
        <AccountCircleSharpIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

const Navbar: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img
          style={{
            width: '18%',
            justifyContent: 'flex-start',
            marginBottom: '2%',
          }}
          src="src/assets/logo.png"
          alt="Logo"
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: '0 40px 40px 0', paddingTop: '1%' }}>
          <BasicMenu />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
