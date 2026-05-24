import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../context/BookContext';
import { Row, Col } from 'react-bootstrap';
import BookItem from './BookItem';
import { fetchBooks } from '../http/bookAPI';

const BookList = observer(() => {
    const { books, setBooks, selectedGenre } = useContext(Context);

    useEffect(() => {
        fetchBooks(selectedGenre?.id || null)
            .then(data => {
                // Добавляем видео-ссылки ко всем книгам
                const allBooks = data.map(book => {
                    if (book.name === 'Колобок') {
                        return { ...book, price: 0, videoUrl: 'https://drive.google.com/file/d/1EQ5HdPysDI4j9E60mZGK4NLMMVttlGJS/view?usp=share_link' };
                    }
                    if (book.name === 'Три поросёнка') {
                        return { ...book, price: 0, videoUrl: 'https://drive.google.com/file/d/1uYAzh1BTJax8G6i90sTSdo0PSP9ny58X/view?usp=share_link' };
                    }
                    return book;
                });

                // Добавляем платную Репку
                allBooks.push({
                    id: 999,
                    name: 'Репка',
                    author: 'Русская народная сказка',
                    price: 299,
                    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny_320x180_10s_1MB.mp4'
                });

                setBooks(allBooks);
            })
            .catch(() => {
                // Если бэкенд не отвечает — показываем моки
                setBooks([
                    {
                        id: 1,
                        name: 'Колобок',
                        author: 'Русская народная сказка',
                        price: 0,
                        videoUrl: 'https://drive.google.com/file/d/1EQ5HdPysDI4j9E60mZGK4NLMMVttlGJS/view?usp=share_link'
                    },
                    {
                        id: 2,
                        name: 'Три поросёнка',
                        author: 'Русская народная сказка',
                        price: 0,
                        videoUrl: 'https://drive.google.com/file/d/1uYAzh1BTJax8G6i90sTSdo0PSP9ny58X/view?usp=share_link'
                    },
                    {
                        id: 999,
                        name: 'Репка',
                        author: 'Русская народная сказка',
                        price: 299,
                        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny_320x180_10s_1MB.mp4'
                    }
                ]);
            });
    }, [selectedGenre, setBooks]);

    return (
        <div style={{ padding: '60px 20px' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.8rem', marginBottom: '50px', background: 'linear-gradient(90deg, #6c5ce7, #ff79c6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {selectedGenre ? `🎬 ${selectedGenre.name}` : '🎬 Все волшебные видео-сказки'}
            </h2>

            <Row className="g-5 justify-content-center">
                {books.map(book => (
                    <Col key={book.id} lg={5} md={6} sm={12}>
                        <BookItem book={book} />
                    </Col>
                ))}
            </Row>
        </div>
    );
});

export default BookList;