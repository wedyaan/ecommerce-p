import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
export default function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle payment submission logic here
    console.log('Payment details:', {
      cardNumber,
      expirationMonth,
      expirationYear,
      cvv,
    });
  };

  const months = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, '0')
  );
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) =>
    String(currentYear + i).slice(2)
  );

  return (
<Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Payment
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Card Number"
              variant="outlined"
              fullWidth
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="expiration-month-label">Expiration Month</InputLabel>
              <Select
                labelId="expiration-month-label"
                id="expiration-month"
                value={expirationMonth}
                onChange={(e) => setExpirationMonth(e.target.value)}
                label="Expiration Month"
                required
              >
                {months.map((month) => (
                  <MenuItem key={month} value={month}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="expiration-year-label">Expiration Year</InputLabel>
              <Select
                labelId="expiration-year-label"
                id="expiration-year"
                value={expirationYear}
                onChange={(e) => setExpirationYear(e.target.value)}
                label="Expiration Year"
                required
              >
                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="CVV"
              variant="outlined"
              fullWidth
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" sx={{backgroundColor:'green'}} fullWidth>
              Pay
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>  )
}
