import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Context } from '../context/BookContext';
import { observer } from 'mobx-react-lite';

const Basket = observer(() => {
    const { basket, removeFromBasket } = useContext(Context);

    const totalPrice = basket.reduce((sum, item) => sum + (item.price || 0), 0);

    return (
        <Container className="mt-5">
            <h1 style={{ textAlign: 'center', fontSize: '2.8rem', marginBottom: '40px' }}>
                🛒 Твоя корзина
            </h1>

            {basket.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '80px 20px', background: '#f8f9fa', borderRadius: '24px' }}>
                    <h3 className="text-muted">Корзина пока пуста</h3>
                    <p className="text-muted mt-3">Добавляй сказки из каталога и возвращайся сюда</p>
                </div>
            ) : (
                <>
                    <Row className="g-4">
                        {basket.map(item => (
                            <Col md={4} key={item.id}>
                                <Card style={{ borderRadius: '24px', boxShadow: '0 10px 30px rgba(108, 92, 231, 0.15)' }}>
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text className="text-muted">{item.author}</Card.Text>

                                        {item.price > 0 ? (
                                            <Card.Text className="text-danger fw-bold">
                                                {item.price} ₽
                                            </Card.Text>
                                        ) : (
                                            <Card.Text className="text-success fw-bold">
                                                Бесплатно
                                            </Card.Text>
                                        )}

                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => removeFromBasket(item.id)}
                                            style={{ borderRadius: '50px' }}
                                        >
                                            Удалить
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <div className="text-end mt-5">
                        <h4>
                            Итого: {totalPrice > 0 ? `${totalPrice} ₽` : 'Бесплатно'}
                        </h4>
                        <Button
                            size="lg"
                            style={{
                                borderRadius: '50px',
                                background: 'linear-gradient(90deg, #6c5ce7, #ff79c6)',
                                border: 'none',
                                padding: '14px 40px',
                                fontSize: '1.2rem',
                                marginTop: '20px'
                            }}
                        >
                            {totalPrice > 0 ? 'Оплатить' : '✨ Начать просмотр'}
                        </Button>
                    </div>
                </>
            )}
        </Container>
    );
});

export default Basket;