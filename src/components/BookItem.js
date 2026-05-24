import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Context } from '../context/BookContext';

const BookItem = ({ book }) => {
    const { addToBasket } = useContext(Context);
    const [isHovered, setIsHovered] = useState(false);

    const isFree = book.price === 0;

    const handleClick = () => {
        if (isFree) {
            // Бесплатные — открываем видео в новой вкладке
            if (book.videoUrl) {
                window.open(book.videoUrl, '_blank');
            }
        } else {
            // Платные — добавляем в корзину
            addToBasket(book);
        }
    };

    const getPreview = () => {
        try {
            if (book.name === 'Колобок') return require('../assets/previews/kolobok.jpeg');
            if (book.name === 'Три поросёнка') return require('../assets/previews/tri-porosyata.jpeg');
        } catch (e) {}
        return null;
    };

    const preview = getPreview();

    return (
        <Card
            style={{
                borderRadius: '24px',
                border: 'none',
                boxShadow: '0 10px 30px rgba(108, 92, 231, 0.15)',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{ position: 'relative', paddingTop: '56.25%', cursor: 'pointer' }} onClick={handleClick}>
                {preview ? (
                    <img src={preview} alt={book.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, #6c5ce7, #ff79c6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                )}

                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '80px', height: '80px', background: 'rgba(255,255,255,0.95)', borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    opacity: isHovered ? 1 : 0, transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(0,0,0,0.4)', zIndex: 2
                }} onClick={(e) => { e.stopPropagation(); handleClick(); }}>
                    <div style={{ width: 0, height: 0, borderTop: '22px solid transparent', borderBottom: '22px solid transparent', borderLeft: '32px solid #222', marginLeft: '8px' }} />
                </div>
            </div>

            <Card.Body style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', padding: '20px' }}>
                <Card.Title style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '8px' }}>{book.name}</Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: '1.05rem', flexGrow: 1, marginBottom: '20px' }}>{book.author}</Card.Text>

                {isFree ? (
                    <Button onClick={handleClick} style={{ width: '100%', borderRadius: '50px', background: 'linear-gradient(90deg, #6c5ce7, #ff79c6)', border: 'none', padding: '14px', fontSize: '1.1rem', fontWeight: '600', marginTop: 'auto' }}>
                        ✨ Смотреть
                    </Button>
                ) : (
                    <Button onClick={() => addToBasket(book)} style={{ width: '100%', borderRadius: '50px', background: '#ff4757', border: 'none', padding: '14px', fontSize: '1.1rem', fontWeight: '600', marginTop: 'auto' }}>
                        🛒 Добавить в корзину ({book.price} ₽)
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
};

export default BookItem;