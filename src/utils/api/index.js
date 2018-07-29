import axios from './config'

const omdbBase = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie`

export default {
  getMovieByTitle: title => axios.get(`${omdbBase}&t=${title}&tomatoes=true`).then(data => data.data),
  getMoviesBySearch: query => axios.get(`${omdbBase}&s=${query}&tomatoes=true`).then(data => data.data)
}
