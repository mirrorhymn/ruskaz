import React from 'react';
import { Card } from 'react-bootstrap';

const Recommendations = () => {
    return (
        <div style={{ padding: '60px 20px', background: '#fff' }}>
            <h2 style={{
                textAlign: 'center',
                fontSize: '2.6rem',
                marginBottom: '40px',
                background: 'linear-gradient(90deg, #6c5ce7, #ff79c6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                ⭐ Рекомендуем посмотреть
            </h2>

            <div className="container" style={{ maxWidth: '520px' }}>
                <Card style={{
                    borderRadius: '24px',
                    border: 'none',
                    boxShadow: '0 10px 30px rgba(108, 92, 231, 0.15)',
                    overflow: 'hidden'
                }}>
                    {/* Превью "Три поросёнка" */}
                    <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                        <img
                            src={require('../assets/previews/tri-porosyata.jpeg')}
                            alt="Три поросёнка"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                        {/* Треугольник Play как на YouTube */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '80px',
                            height: '80px',
                            background: 'rgba(255,255,255,0.95)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
                        }}>
                            <div style={{
                                width: 0,
                                height: 0,
                                borderTop: '22px solid transparent',
                                borderBottom: '22px solid transparent',
                                borderLeft: '32px solid #222',
                                marginLeft: '8px'
                            }} />
                        </div>
                    </div>

                    <Card.Body>
                        <Card.Title style={{ fontSize: '1.45rem', fontWeight: '700' }}>Три поросёнка</Card.Title>
                        <Card.Text className="text-muted" style={{ fontSize: '1.1rem' }}>
                            Устоит ли самый крепкий домик против серого волка?
                        </Card.Text>
                        <Card.Text style={{ fontSize: '1.4rem', fontWeight: '700', color: '#6c5ce7' }}>
                            Бесплатно
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Recommendations;