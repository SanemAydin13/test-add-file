import React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import { PaletteOptions } from '@mui/material/styles/createPalette';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';

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
      // Custom colors
      customColors: {
        light: '#D9D9D9', // ash
        select: '#A5A5A5', // selection color
        dark: '#414D59', // week color
      },
      action: {
        active: '#C70039', // red
      },
    } as CustomPaletteOptions, // Cast to CustomPaletteOptions 
  });

const LeftBar: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: '15px 0' }}>
          <Box component="li" sx={{ left: 0, margin: '0' }}>
            <Box sx={{ padding: '7px', fontSize: 17, display: 'flex', alignItems: 'center' }}>
              <CalendarMonthIcon sx={{ fontSize: 30, pr: 1 }} />
              Calendar
            </Box>
          </Box>
          <Box component="li" sx={{ left: 0, margin: '0' }}>
            <Box sx={{ padding: '7px', fontSize: 17, display: 'flex', alignItems: 'center' }}>
              <AssessmentRoundedIcon sx={{ fontSize: 30, pr: 1 }} />
              Overview
            </Box>
          </Box>
          <Box component="li" sx={{ left: 0, margin: '0' }}>
            <Box sx={{ padding: '7px', fontSize: 17, display: 'flex', alignItems: 'center' }}>
              <PeopleAltIcon sx={{ fontSize: 30, pr: 1 }} />
              Manage Users
            </Box>
          </Box>
          <Box component="li" sx={{ bgcolor: 'customColors.select', left: 0, margin: '0' }}>
            <Box sx={{ padding: '7px', fontSize: 17, display: 'flex', alignItems: 'center' }}>
              <ListRoundedIcon sx={{ fontSize: 30, pr: 1 }} />
              Add Filings
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LeftBar;
