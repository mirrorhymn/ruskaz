import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

const Contacts = () => {
    return (
        <div style={{
            padding: '80px 20px',
            background: '#2d3436',
            color: '#fff',
            textAlign: 'center'
        }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '50px' }}>📬 Контакты</h2>

            <div style={{ fontSize: '1.3rem', lineHeight: '2.2' }}>
                <p>Ижевск, Удмуртская Республика</p>
                <p>📞 +7 (912) 345-67-89</p>
                <p>✉️ ruskaz@support.ru</p>
            </div>

            <ScrollToTop smooth color="#ff79c6" style={{ bottom: '40px', right: '40px' }} />
        </div>
    );
};

export default Contacts;