import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import IconSection from "./IconSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const mySlider = [
  {
    text: "Breakfast",
    link: "https://imgmedia.lbb.in/media/2019/08/5d662c8ea84656a7661be92a_1566977166741.jpg",
  },
  {
    text: "Dinner",
    link: "https://wallpaperaccess.com/full/1306088.jpg",
  },
];

export default function Hero() {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{
          pt: 2,
          mt: 2.5,
          display: "flex",
          alignItems: "center",
          gap: 2,
          minHeight: "28%",
        }}
      >
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} alt="" />

                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },

                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    }}
                    variant="h4"
                  >
                    Order your favorite dishes with a few taps and enjoy the
                    convenience of delivery.
                  </Typography>

                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 500,
                      my: 1,
                    }}
                    variant="h3"
                  >
                    {item.text}
                  </Typography>

                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#D23F57",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    Order now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <img
          className="imgON"
          src="https://tse3.mm.bing.net/th?id=OIP.sPmc7cEaBaOiGTW5pflloAHaFl&pid=Api&P=0&h=220"
          alt=""
        />

        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
              minWidth: "31.4%",
            },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <img
              width={"100%"}
              src="https://tse3.mm.bing.net/th?id=OIP.sPmc7cEaBaOiGTW5pflloAHaFl&pid=Api&P=0&h=220"
              alt=""
            />

            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0, 0, 0, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: 31,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#F3F3F3",
                    fontSize: "22px",
                  }}
                >
                  Savor the Flavors{" "}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#F3F3F3",
                    lineHeight: "16px",
                    mt: 1,
                  }}
                >
                  Order your favorite dishes with a few taps
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Box sx={{ position: "relative" }}>
            <img
              width={"100%"}
              src="https://tse2.mm.bing.net/th?id=OIP.5M0K1jz8_ZAPnyQSh39wHgHaE8&pid=Api&P=0&h=220"
              alt=""
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0, 0, 0, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: 31,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#F6F6F6",
                    fontSize: "18px",
                    fontWeight: 300,
                  }}
                >
                  Delicious Delights
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#FFFFFF",
                    lineHeight: "19px",
                    mt: 1,
                  }}
                >
                  Discover the best local eats{" "}
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>

      <IconSection />
    </Container>
  );
}
