import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Context } from '../context/BookContext';
import { observer } from 'mobx-react-lite';
import BookList from './BookList';

const Shop = observer(() => {
    const { genres, selectedGenre, setSelectedGenre } = useContext(Context);

    return (
        <Container className="mt-4">
            {/* === ФИЛЬТРЫ ЖАНРОВ СВЕРХУ === */}
            <div style={{ marginBottom: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                    onClick={() => setSelectedGenre(null)}
                    style={{
                        padding: '10px 24px',
                        borderRadius: '50px',
                        border: 'none',
                        background: selectedGenre === null ? '#6c5ce7' : '#f0f0f0',
                        color: selectedGenre === null ? '#fff' : '#333',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                    }}
                >
                    Все сказки
                </button>

                {genres.map(genre => (
                    <button
                        key={genre.id}
                        onClick={() => setSelectedGenre(genre)}
                        style={{
                            padding: '10px 24px',
                            borderRadius: '50px',
                            border: 'none',
                            background: selectedGenre?.id === genre.id ? '#6c5ce7' : '#f0f0f0',
                            color: selectedGenre?.id === genre.id ? '#fff' : '#333',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                    >
                        {genre.name}
                    </button>
                ))}
            </div>

            <BookList />
        </Container>
    );
});

export default Shop;