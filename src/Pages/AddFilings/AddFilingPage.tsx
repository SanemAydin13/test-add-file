import React from 'react';
import { PaletteOptions } from '@mui/material/styles/createPalette';
import { Box, CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import LeftBar from '../../Components/LeftBar';
import Navbar from '../../Components/Navbar';
import AddFilings from '../../Components/AddFilings';
interface CustomPaletteOptions extends PaletteOptions {
    customColors?: {
      light: string;
      select: string;
      dark: string;
    };
  }
  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat',
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
      customColors: {
        light: '#D9D9D9', // ash
        select: '#A5A5A5', // selection color
        dark: '#414D59', // week color
      },
      action: {
        active: '#C70039', // red
      },
    } as CustomPaletteOptions, 
  });

const AddFilingPage: React.FC = (selectUsers) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'background.default' }}>
        {/* Left Sidebar */}
        <Box
          sx={{
            width: '18%',
            position: 'fixed',
            top: '65px', 
            bottom: 0,
            left:0,
            bgcolor: 'customColors.light',
            borderRight: '1px solid #ccc',
            overflowY: 'auto',
          }}
        >
          <LeftBar />
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, ml: '10%' }}>
          {/* Navbar */}
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: '65px',
              bgcolor: 'action.active',
              zIndex: 1000,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Navbar />
          </Box>

          {/*-------  Main content Area  ------   */}


          <Box sx={{ display: 'flex', flex: 1, mt: '1em' }}>

            {/*Add Filings Page Area */}

            <Box
              sx={{
                width:'100%',
                bgcolor: 'background.light',
              }}
            >
              <AddFilings />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AddFilingPage;
