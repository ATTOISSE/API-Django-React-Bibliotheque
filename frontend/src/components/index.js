import { useEffect, useState } from "react";
import { getBooksAPI } from "../services/bookService";
import { Nav } from "../nav";

export const Home = () => {
    const [books, setBooks] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        getBooksAPI(page)
            .then(response => {
                setBooks(response.data);
                setTotalPage(Math.ceil(response.data.count/8))
            })
            .catch(error => {
                console.error('Une erreur est survenue lors du chargement...', error);
            });
    }, [page]);

    const handlePageChange = (newPage)=>{
        setPage(newPage)
    }

    return <>
    <Nav />
        <div className="container">
            <a className="nav-link mx-5 my-1 offset-10" href="#"></a>
            <h1 className='mt-4 text-center'>Bienvenue dans notre catalogue</h1>
            <div className="App-catalog">
                <div className='container mt-4'>
                    <div className='row mt-4'>
                        {books && Array.isArray(books.results) ? (
                            books.results.map((book, index) => (
                                <div key={index} className='col-md-3 mb-4 mt-3'>
                                    <div className="card  flex-x">
                                        <img className="card-img-top" src={book.picture} alt="Card image cap" width="100%" height="300" />
                                        <div className="card-body bg-body-tertiary">
                                            <h3 className="card-title text-capitalize text-secondary">{book.author}</h3>
                                            <h4 className="card-title text-capitalize">{book.title}</h4>
                                            <h4 className="card-title">{formatDate(book.publication_date) }  </h4>
                                            <p className="card-text">{book.gender} <span className={`text-${book.disponibility ? 'info' : 'danger'} mx-2`} > {book.disponibility ? 'Disponible' : 'Indispo'} </span></p>
                                        </div>
                                        <button id={`btn${book.id}`} className="btn btn-info text-light">Emprunter</button>
                                    </div>
                                </div>
                            ))) : (
                            <h1>Aucun</h1>
                        )}
                    </div>
                </div>
            </div>
            <div className="offset-10">
            <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="btn btn-outline-primary"
            >
                <i class="bi bi-arrow-left-short"></i>
            </button>
            <span className="mx-2"> {page} </span>
            <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPage}
                className="btn btn-primary"
            >
                <i class="bi bi-arrow-right-short"></i>
            </button>
        </div>
        </div>
    </>
}

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};