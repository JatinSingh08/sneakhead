import axios from 'axios';

export const loginServices = async ({email, password}) => 
  await axios.post('/api/auth/login', {
    email,
    password
  });

export const signupServices = async ({firstName, lastName, email, password}) =>
  await axios.post('/api/auth/signup', {
    firstName,
    lastName,
    email,
    password
  })

export const getProducts = async () => await axios.get('/api/products');