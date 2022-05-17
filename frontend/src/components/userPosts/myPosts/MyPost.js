import { Button, CardMedia, Grid, Card, CardActions, Typography, CardContent, Container, } from "@mui/material";

import image from "../../../images/car1.jpg";
import './MyPosts.css'
const MyPost = () => {
  return (
    <div className="my__post">
      <Card sx={{ maxWidth: 345 }} >
      <CardMedia component="img" alt="product-img" height="140" image={image} />
      <CardContent>
        <Grid container>
          <Grid item xs={4}>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </Grid>
          <Grid item xs={8} container justifyContent="end">
            <Typography gutterBottom variant="h6" component="div">
              NGN 3,000,000
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" sx={{ bgcolor: "error.main" }} size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default MyPost
