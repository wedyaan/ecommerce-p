import { React, useState } from "react";
import { Typography, Button, TextField, Grid,Box , MenuItem } from "@mui/material";

export default function AddressForm() {
  const [address1, setAddress1] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Address form submitted:', {
      address1,
      name,
      email,
      phone,
      city,
      state,
      zip,
      country,
    });
  };

  const countries = ['KSA', 'Qatar', 'UAE', 'Oman'];



  return (
    <div>
      <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Address
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>

        <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Address 1"
              variant="outlined"
              fullWidth
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              required
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="State/Province"
              variant="outlined"
              fullWidth
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Zip/Postal Code"
              variant="outlined"
              fullWidth
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Country"
              variant="outlined"
              fullWidth
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              select
              required
            >
              {countries.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained"   sx={{backgroundColor:'green'}} fullWidth>
              Save Address
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
    </div>
  )
}
