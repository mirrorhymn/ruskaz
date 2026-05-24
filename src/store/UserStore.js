import { makeAutoObservable } from 'mobx';

export default class UserStore {
    constructor() {
        this._isAuth = false;     // авторизован ли пользователь
        this._user = {};          // данные пользователя (id, email, role и т.д.)
        makeAutoObservable(this); // MobX следит за изменениями
    }

    // сеттеры
    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    // геттеры (чтобы можно было читать из компонентов)
    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }
}