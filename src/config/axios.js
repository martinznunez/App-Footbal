import axios from "axios";

const getAxios = axios.create({
  baseURL:
    "https://football-players-b31f2.firebaseio.com/players.json?print=pretty",
});

export default getAxios;
