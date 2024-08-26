import axios from 'axios'
export const getBooksAPI = ()=> axios.get('http://127.0.0.1:8000/api/books/')
export const deleteBookAPI = (id)=> axios.delete(`http://127.0.0.1:8000/api/books/`+id)
export const updateBookAPI = (id,book)=> axios.put(`http://127.0.0.1:8000/api/books/`+id,book)
export const postBookAPI = (book)=> axios.post('http://127.0.0.1:8000/api/books/', book, {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
})