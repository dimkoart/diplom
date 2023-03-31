export type Films = {
  films: Film[]
  pagesCount: number
}
export type Film = {
  filmId: number
  posterUrl: string
  rating: number
  ratingVoteCount: number
  nameEn: string
}

export type Comments = {
  comments: Comment[]
}
export type Comment = {
  author: string
  type: string
  date: string
  negativeRating: number
  positiveRating: number
  title: string
  description: string
}

export type FilmId = {
  kinopoiskId: number
  posterUrl: string
  ratingKinopoisk: number
  ratingKinopoiskVoteCount: number
  nameOriginal: string
  description: string
  genres: [{ genre: string }]
}
export type Cast = {
  nameEn: string
  posterUrl: string
}
