import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';
import { createPost } from '../../api';


const PostUpload = () => {
  const [postData, setPostData] = useState({ name: '', description: '', price: '', selectedFile: '' });
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPost({ ...postData, name: user?.result?.name }));
  };

  return (
    <Container sx={{ maxWidth: 490 }}>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant='h3' >Upload a Post</Typography>
        <TextField name="name" variant="outlined" label="price" half="true" value={postData.price} onChange={(e) => setPostData({ ...postData, price: e.target.value.split(',') })} />
        <TextField name="price" variant="outlined" label="price" half="true" value={postData.price} onChange={(e) => setPostData({ ...postData, price: e.target.value.split(',') })} />
        <TextField name="description" variant="outlined" label="description" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
        <Container sx={{m:1}} ><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></Container>
        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>upload</Button>
      </form>
    </Container>
  )
}

export default PostUpload