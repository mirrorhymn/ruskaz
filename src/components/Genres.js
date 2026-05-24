import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../context/BookContext';
import { Row, Col, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Genres = observer(() => {
    const { genres, setSelectedGenre } = useContext(Context);
    const history = useHistory();

    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
        history.push('/shop');
    };

    return (
        <div style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #f0f4ff, #fff0f8)' }}>
            <h2 style={{
                textAlign: 'center',
                fontSize: '2.8rem',
                marginBottom: '50px',
                background: 'linear-gradient(90deg, #6c5ce7, #ff79c6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                🌟 Выбери свой волшебный жанр
            </h2>

            <Row className="g-4 justify-content-center">
                {genres.map(genre => {
                    let previewSrc;
                    try {
                        if (genre.name === 'Волшебные') previewSrc = require('../assets/genres/volshebnye.jpg');
                        else if (genre.name === 'Бытовые') previewSrc = require('../assets/genres/bytovye.jpg');
                        else if (genre.name === 'Про животных') previewSrc = require('../assets/genres/pro-zhivotnyh.jpg');
                        else if (genre.name === 'Небылицы') previewSrc = require('../assets/genres/nebylicy.jpg');
                    } catch (e) {
                        previewSrc = null;
                    }

                    return (
                        <Col md={3} sm={6} key={genre.id}>
                            <Card
                                style={{
                                    borderRadius: '24px',
                                    border: 'none',
                                    boxShadow: '0 10px 30px rgba(108, 92, 231, 0.15)',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}
                                onClick={() => handleGenreClick(genre)}
                            >
                                <div style={{
                                    height: '200px',
                                    background: previewSrc ? 'transparent' : 'linear-gradient(135deg, #a29bfe, #ff79c6)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden'
                                }}>
                                    {previewSrc ? (
                                        <img
                                            src={previewSrc}
                                            alt={genre.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <span style={{ fontSize: '80px' }}>📖</span>
                                    )}
                                </div>
                                <Card.Body className="text-center">
                                    <Card.Title style={{ fontSize: '1.4rem', fontWeight: '700' }}>
                                        {genre.name}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
});

export default Genres;