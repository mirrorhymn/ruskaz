import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Header = observer(() => {
    const { isAuth, logout } = useContext(Context);   // ← правильно берём isAuth

    return (
        <header style={{
            background: 'linear-gradient(90deg, #6c5ce7, #a29bfe)',
            boxShadow: '0 8px 25px rgba(108, 92, 231, 0.3)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            padding: '15px 0'
        }}>
            <div className="container d-flex justify-content-between align-items-center">

                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <div style={{ fontSize: '32px', fontWeight: '800', color: '#fff' }}>РуСказ</div>
                </NavLink>

                <nav className="d-flex gap-3">
                    <NavLink to="/" className="nav-link" style={({ isActive }) => ({ padding: '10px 24px', borderRadius: '50px', color: isActive ? '#fff' : '#e0d4ff', background: isActive ? 'rgba(255,255,255,0.25)' : 'transparent' })}>Главная</NavLink>
                    <NavLink to="/shop" className="nav-link" style={({ isActive }) => ({ padding: '10px 24px', borderRadius: '50px', color: isActive ? '#fff' : '#e0d4ff', background: isActive ? 'rgba(255,255,255,0.25)' : 'transparent' })}>Каталог</NavLink>
                    <NavLink to="#contacts" className="nav-link" style={({ isActive }) => ({ padding: '10px 24px', borderRadius: '50px', color: isActive ? '#fff' : '#e0d4ff', background: isActive ? 'rgba(255,255,255,0.25)' : 'transparent' })}>Контакты</NavLink>
                </nav>

                <div className="d-flex align-items-center gap-4">
                    {isAuth && (
                        <NavLink to="/basket" style={{ fontSize: '28px', textDecoration: 'none' }}>
                            🛒
                        </NavLink>
                    )}

                    {isAuth ? (
                        <button
                            onClick={logout}
                            className="btn btn-light px-4"
                            style={{ borderRadius: '50px' }}
                        >
                            Выйти
                        </button>
                    ) : (
                        <NavLink to="/auth" className="btn btn-light px-4" style={{ borderRadius: '50px' }}>
                            Войти
                        </NavLink>
                    )}
                </div>
            </div>
        </header>
    );
});

export default Header;