import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Context } from '../index';

import Header from './Header';
import Genres from './Genres';
import Recommendations from './Recommendations';
import Description from './Description';
import Contacts from './Contacts';

import Shop from './Shop';
import Auth from './Auth';
import Basket from './Basket';

const AppRouter = observer(() => {
    const { isAuth } = useContext(Context);   // ← ИСПРАВЛЕНО

    return (
        <>
            <Header />

            <Switch>
                {/* Главная */}
                <Route exact path="/">
                    <Genres />
                    <Recommendations />
                    <Description />
                    <Contacts />
                </Route>

                {/* Каталог (доступен всем) */}
                <Route path="/shop" component={Shop} />

                {/* Корзина (только для авторизованных) */}
                <Route path="/basket">
                    {isAuth ? <Basket /> : <Redirect to="/auth" />}
                </Route>

                {/* Авторизация */}
                <Route path="/auth" component={Auth} />

                {/* Всё остальное — на главную */}
                <Redirect to="/" />
            </Switch>
        </>
    );
});

export default AppRouter;