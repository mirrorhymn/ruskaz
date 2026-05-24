import { makeAutoObservable } from 'mobx';

export default class BookStore {
    constructor() {
        this._genres = [];
        this._books = [];
        this._selectedGenre = {};
        this._basket = [];           // ← корзина
        makeAutoObservable(this);
    }

    // === СЕТТЕРЫ ===
    setGenres(genres) { this._genres = genres; }
    setBooks(books) { this._books = books; }
    setSelectedGenre(genre) { this._selectedGenre = genre; }

    // === РАБОТА С КОРЗИНОЙ ===
    addToBasket(book) {
        if (!this._basket.find(item => item.id === book.id)) {
            this._basket.push({ ...book, quantity: 1 });
        }
    }

    removeFromBasket(id) {
        this._basket = this._basket.filter(item => item.id !== id);
    }

    clearBasket() {
        this._basket = [];
    }

    // === ГЕТТЕРЫ ===
    get genres() { return this._genres; }
    get books() { return this._books; }
    get selectedGenre() { return this._selectedGenre; }
    get basket() { return this._basket; }
}