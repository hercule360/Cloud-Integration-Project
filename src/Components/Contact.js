import React from 'react';
import { Box, Container, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: '#f5f5f5',
}));

const StyledFormContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),

  '& .MuiTypography-h4': {
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
  },

  '& .MuiTextField-root': {
    width: '100%',
  },

  '& .MuiTypography-subtitle1': {
    fontWeight: 'bold',
  },

  '& .MuiTypography-body1': {
    color: '#666',
  },
}));

const ContactSection = () => {
  return (
    <StyledContactSection>
      <StyledFormContainer maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Contact 
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <TextField label="Name" variant="outlined" />
            <TextField label="Email" variant="outlined" />
            <TextField label="Message" variant="outlined" multiline rows={4} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="subtitle1">Contact </Typography>
            <Typography variant="body1">
              Email: contact@example.com
            </Typography>
            <Typography variant="body1">
              Phone: (216) 22 22 22 21
            </Typography>
            <Typography variant="body1">
            GoMyCode Hackerspace, 1 Place Tahar Haddad, 1 Tunis 1053, Tunis 1053
            </Typography>
          </Box>
        </Box>
      </StyledFormContainer>
    </StyledContactSection>
  );
};

export default ContactSection;