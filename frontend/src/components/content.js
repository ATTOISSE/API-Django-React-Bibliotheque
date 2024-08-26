import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ListBooks } from './books/listBook';
import { AddBook } from './books/addBook';

export const Content = () => {
    return (
        <div className="content">
            <Routes>
                <Route path="/add" element={<AddBook />} />
                <Route path="/lists" element={<ListBooks />} />
                <Route path="/orders" element={<h2>Hello from Orders</h2>} />
                <Route path="/clients" element={<h2>Hello from Clients</h2>} />
                <Route path="/stat" element={<h2>Hello from Statistiques</h2>} />
                <Route path="/" element={
                    <div>
                        <h1 className='text-center'>Bienvenue sur le Tableau de Bord</h1>
                        <p className='text-center'>Sélectionnez une option dans la sidebar pour afficher le contenu.</p>
                    </div>
                } />
            </Routes>
        </div>
    );
};

