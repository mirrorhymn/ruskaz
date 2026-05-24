import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { useHistory } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { Container, Form, Button, Card } from 'react-bootstrap';

const Auth = observer(() => {
    const { setUser, setIsAuth } = useContext(Context);   // ← ИСПРАВЛЕНО
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }

            setUser(data);        // ← правильно
            setIsAuth(true);      // ← правильно
            history.push('/shop');
            alert('✅ Успешно!');
        } catch (e) {
            console.error('Ошибка авторизации:', e);
            alert(e.response?.data?.message || 'Ошибка при авторизации');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Card style={{ width: '460px', borderRadius: '28px', boxShadow: '0 20px 50px rgba(108, 92, 231, 0.25)' }}>
                <Card.Body style={{ padding: '50px 40px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#6c5ce7' }}>
                        {isLogin ? 'Вход в РуСказ' : 'Регистрация'}
                    </h2>

                    <Form>
                        <Form.Group className="mb-4">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Введите email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                style={{ borderRadius: '50px', padding: '14px' }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Введите пароль"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                style={{ borderRadius: '50px', padding: '14px' }}
                            />
                        </Form.Group>

                        <Button
                            onClick={click}
                            style={{
                                width: '100%',
                                borderRadius: '50px',
                                padding: '14px',
                                background: 'linear-gradient(90deg, #6c5ce7, #ff79c6)',
                                border: 'none',
                                fontSize: '1.1rem'
                            }}
                        >
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>

                        <div className="text-center mt-3">
                            <Button
                                variant="link"
                                onClick={() => setIsLogin(!isLogin)}
                                style={{ color: '#6c5ce7' }}
                            >
                                {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Есть аккаунт? Войти'}
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
});

export default Auth;
