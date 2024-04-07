/* eslint-disable prettier/prettier */
const apiKey: string = 'dbd79db7efa86443e58f5feecd5a8357';

export const baseImagePath = (size: string, path: string) => {
    return `https://image.tmdb.org/t/p/${size}/${path}`;
}

export const nowPlayingMovies : string =
 `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey} `;
export const popularMovies : string = 
`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey} `;
export const topRatedMovies : string =
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey} `;
export const upcomingMovies : string =
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey} `;\
export const searchMovies = (query: string) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
}
export const movieDetail = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
}
export const movieCredits = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
}
export const movieImages = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}`;
}
export const movieVideos = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;
}
export const movieReviews = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}`;
}
export const movieRecommendations = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`;
}
export const movieSimilar = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`;
}
export const movieGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
export const tvGenres = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`;
export const discoverMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
export const discoverTv = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`;
export const personDetail = (id: number) => {
    return `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`;
}
export const personImages = (id: number) => {
    return `https://api.themoviedb.org/3/person/${id}/images?api_key=${apiKey}`;
}
export const personMovieCredits = (id: number) => {
    return `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}`;
}
export const personTvCredits = (id: number) => {
    return `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${apiKey}`;
}
export const personExternalIds = (id: number) => {
    return `https://api.themoviedb.org/3/person/${id}/external_ids?api_key=${apiKey}`;
}
export const searchPeople = (query: string) => {
    return `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${query}`;
}
export const searchTv = (query: string) => {
    return `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`;
}
export const tvDetail = (id: number) => {
    return `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`;
}
export const tvCredits = (id: number) => {
    return `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`;
}
export const tvImages = (id: number) => {
    return `https://api.themoviedb.org/3/tv/${id}/images?api_key=${apiKey}`;
}
export const tvVideos = (id: number) => {
    return `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}`;
}
export const tvReviews = (id: number) => {
    return `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${apiKey}`;
}
export const tvRecommendations = (id: number) => {
    return `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${apiKey}`;
}
export const tvSimilar = (id: number) => {
    return `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${apiKey}`;
}


