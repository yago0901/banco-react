import axios from 'axios';

export async function fetchHistory() {
  const { data } = await axios.get('http://localhost:5000/history');
  return data;
};

export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};