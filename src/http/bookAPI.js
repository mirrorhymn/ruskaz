import { $host } from './index';

export const fetchGenres = async () => {
    const { data } = await $host.get('/genre');
    return data;
};

export const fetchBooks = async (genreId = null) => {
    const { data } = await $host.get('/book', {
        params: genreId ? { genreId } : {}
    });
    return data;
};