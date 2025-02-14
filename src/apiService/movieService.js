import axios from 'axios';
const apiBase = 'https://63d9187974f386d4efe47837.mockapi.io/movies';

const movieService = {
  getAll() {
    return fetch(apiBase)
      .then((res) => res.json())
      .then((data) => data);
  },

  getById(id) {
    return axios.get(apiBase + `/${id}`).then((res) => res.data);
  },
};
export default movieService;
