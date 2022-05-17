import { Container, Grid } from '@mui/material';

import MyPost from './myPosts/MyPost'
import PostUpload from './uploadPost/PostUpload';

const userPosts = () => {
  return (
    <Container>
      <PostUpload />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={4} md={4} key={index} justifyContent="center">
            <MyPost />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default userPosts