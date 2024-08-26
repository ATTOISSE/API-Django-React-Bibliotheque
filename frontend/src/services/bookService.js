import axios from 'axios'
export const getBooks = ()=> axios.get('http://127.0.0.1:8000/api/books/')