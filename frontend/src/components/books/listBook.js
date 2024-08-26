import { useEffect, useReducer } from "react"
import { bookReducer, initialState } from "../reducer/bookReducer"
import { getBooksAPI } from "../../services/bookService"

export const ListBooks = () => {
    const [state, dispatch] = useReducer(bookReducer, initialState)

    useEffect(() => {
        getBooksAPI()
            .then(response => {
                dispatch({
                    type: 'SET_BOOKS',
                    payload: response.data
                })
            })
            .catch(error => {
                console.error('Une erreur produit lors du chargement ...', error);
            })
    }, [])

    return <>
        <h2 className="text-center">Liste des livres</h2>
        <table className="table table-responsive">
            <thead>
                {state.books && Array.isArray(state.books.results) ? (
                    <tr>
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Genre</th>
                        <th>Publié</th>
                        <th>Disponibilité</th>
                        <th>Actions</th>
                    </tr>
                ):(
                    <p>Aucun element chargé ...</p>
                )}
            </thead>
            <tbody>
            {state.books && Array.isArray(state.books.results) &&(
                state.books.results.map((book,index)=>(
                    <tr key={index}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.gender}</td>
                        <td>{book.publication_date}</td>
                        <td className={`text-${book.disponibility ? 'info' : 'danger'} mx-2`}> {book.disponibility ? 'Disponible' : 'Indisponible'}</td>
                        <td>
                            <button type="button" className="btn btn-warning mx-1">Modifier</button>
                            <button type="button" className="btn btn-danger">Supprimer</button>
                        </td>
                    </tr>
                ))
            )}
            </tbody>
        </table>
    </>

}
