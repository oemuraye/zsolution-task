
import { CardMedia, Container, Grid, Typography } from "@mui/material";
import product_image from '../../images/car1.jpg'

import './ProductDetails.css';
const ProductDetails = () => {
    return (
        <div className="details__page">
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }}>
                    <Grid item xs={12} sm={4} md={5} >
                        <CardMedia>
                            <img src={product_image} alt="product-img" />
                        </CardMedia>
                    </Grid>
                    <Grid item xs={12} sm={4} md={7} >
                        <Typography gutterBottom variant="h4" >Title</Typography>
                        <Typography gutterBottom variant="body1" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus quod, at est tenetur doloribus ducimus consectetur in. Quo quis reiciendis, exercitationem harum possimus atque asperiores libero vitae molestias nostrum nesciunt architecto laborum maiores iusto omnis quae magni eos itaque rerum! In deleniti optio nesciunt rerum fugiat, quas molestiae omnis, nemo, hic possimus doloremque nihil ad illum saepe explicabo reprehenderit!</Typography>
                        <Typography gutterBottom variant="h5" >Price</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ProductDetails;
