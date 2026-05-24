import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/UserContext';
import { BookProvider } from './context/BookContext';

// ←←← Это важно! Чтобы все компоненты могли импортировать Context
export { Context } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <UserProvider>
            <BookProvider>
                <App />
            </BookProvider>
        </UserProvider>
    </React.StrictMode>
);