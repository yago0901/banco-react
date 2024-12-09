import axios from 'axios';
import { SignJWT } from 'jose';

export const generateToken = async (user: string) => {
  const secret = new TextEncoder().encode('mysecret');
  const payload = { username: user };
  
  const token = await new SignJWT(payload)
  .setProtectedHeader({ alg: 'HS256' })
  .sign(secret);
    
  return token;
};

export async function fetchUsers() {
  const { data } = await axios.get('http://localhost:5000/user');
  return data;
};

