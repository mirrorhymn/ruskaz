import React, { createContext, useState, useEffect } from 'react';
import { fetchGenres, fetchBooks } from '../http/bookAPI';

export const Context = createContext(null);

export const BookProvider = ({ children }) => {
    const [genres, setGenres] = useState([]);
    const [books, setBooks] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [basket, setBasket] = useState([]);           // ← корзина
    const [loading, setLoading] = useState(true);

    // Загружаем жанры и книги при старте
    useEffect(() => {
        fetchGenres().then(data => setGenres(data));
        fetchBooks().then(data => setBooks(data)).finally(() => setLoading(false));
    }, []);

    // Добавление в корзину
    const addToBasket = (book) => {
        setBasket(prev => {
            if (prev.find(item => item.id === book.id)) return prev;
            return [...prev, book];
        });
        alert(`✅ ${book.name} добавлен в корзину!`);
    };

    // Удаление из корзины
    const removeFromBasket = (id) => {
        setBasket(prev => prev.filter(item => item.id !== id));
    };

    return (
        <Context.Provider value={{
            genres, setGenres,
            books, setBooks,
            selectedGenre, setSelectedGenre,
            basket, addToBasket, removeFromBasket,   // ← новые методы
            loading
        }}>
            {children}
        </Context.Provider>
    );
};