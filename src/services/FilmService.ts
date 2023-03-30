import axios from 'axios'

export class FilmService {
  static async fetchFilms(page: number) {
    return (
      await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`,
        {
          headers: {
            'X-API-KEY': '58288e48-fd39-4e9c-98f1-f8c9d79b8e83',
          },
        }
      )
    ).data
  }

  static async fetchPremieres(page: number) {
    return (
      await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.1/films/releases?year=2023&month=JANUARY&page=${page}`,
        {
          headers: {
            'X-API-KEY': '58288e48-fd39-4e9c-98f1-f8c9d79b8e83',
          },
        }
      )
    ).data
  }
  static async fetchComments(page: number, id: number) {
    return (
      await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/reviews?page=1&order=DATE_DESC`,
        {
          headers: {
            'X-API-KEY': '58288e48-fd39-4e9c-98f1-f8c9d79b8e83',
          },
        }
      )
    ).data
  }
  static async fetchSeries(page: number) {
    return (
      await axios.get(
        `https://api.kinopoisk.dev/v1/season?page=${page}&limit=20`,
        {
          headers: {
            'X-API-KEY': '7NC1661-S2W4582-P6KVTTR-FG5NZ8M',
          },
        }
      )
    ).data
  }
}
