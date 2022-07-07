import { Button, CardMedia, Grid, Card, CardActions, Typography, CardContent,} from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

import image from '../../../images/car1.jpg'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Button variant="contained" sx={{ p: 1, pl: 2, pr: 2 }} size='small'  >
          Buy Now
        </Button>
          <Link to="/details">
            <Button variant="outlined" size='large' sx={{ml: 2}}>
              <Typography variant="body2">View</Typography>
              <ReadMoreIcon />
            </Button>
          </Link>
      </CardActions>
    </Card>
  );
}

export default Product