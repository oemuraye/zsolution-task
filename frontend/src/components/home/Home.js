import { Container, Grid, Typography } from "@mui/material";

import "./Home.css";
import Product from "./products/Product";
// import Image from '../../images/car-cover1.jpg'

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div>
          <Typography gutterBottom color="whitesmoke" variant="h2">Exotic Rides</Typography>
          <Typography variant="h4" color="#00e676">Get Your Dream Car...</Typography>
        </div>
      </div>

      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={12} sm={4} md={4} key={index} justifyContent="center">
              <Product />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
