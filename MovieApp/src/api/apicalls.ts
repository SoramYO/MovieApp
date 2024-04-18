/* eslint-disable prettier/prettier */
const apiKey: string = 'dbd79db7efa86443e58f5feecd5a8357';

export const baseImagePath = (size: string, path: string) => {
    return `https://image.tmdb.org/t/p/${size}/${path}`;
};

export const nowPlayingMovies : string =
 `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey} `;
export const popularMovies : string =
`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey} `;
export const topRatedMovies : string =
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey} `;
export const upcomingMovies : string =
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey} `;
export const searchMovies = (query: string) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
};
export const movieDetails = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
};
export const movieCastDetails = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
};
export const movieCredits = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
};
export const movieImages = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}`;
};
export const movieVideos = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;
};
export const movieReviews = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}`;
};
export const movieRecommendations = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`;
};
export const movieSimilar = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`;
};
export const movieGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
export const tvGenres = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`;
export const discoverMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
export const discoverTv = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`;


