import React, { useState } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import storeItems from '../../components/main/storeItems.json';
import { Products } from './Products';

export default function Main() {
  const [alignment, setAlignment] = useState('all');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const filteredProducts = alignment === 'all'
    ? storeItems
    : storeItems.filter(item => item.category === alignment);

  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, 0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton
            value="all"
            className="myButton"
            aria-label="all products"
          >
            All Products
          </ToggleButton>

          <ToggleButton
            className="myButton"
            value="breakfast"
            aria-label="breakfast"
          >
            Breakfast
          </ToggleButton>

          <ToggleButton
            className="myButton"
            value="lunch"
            aria-label="lunch"
          >
            Lunch
          </ToggleButton>

          <ToggleButton
            className="myButton"
            value="dinner"
            aria-label="dinner"
          >
            Dinner
          </ToggleButton>

          <ToggleButton
            className="myButton"
            value="cafe"
            aria-label="cafe"
          >
            Cafe
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {filteredProducts.map((item) => {
          return (
            <Card
              key={item.id}
              sx={{
                maxWidth: 333,
                mt: 6,
                ":hover .MuiCardMedia-root ": {
                  rotate: "1deg",
                  scale: "1.1",
                  transition: "0.35s",
                },
              }}
            >
              <Products {...item} />
            </Card>
          );
        })}
      </Stack>
    </Container>
  );
}