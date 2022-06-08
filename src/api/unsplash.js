import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',  
  headers: {
    Authorization: "Client-ID S1tUvi3Buus3EFerw8TJ3PqbC0rgg6HZa-IdS6xgnKM",
  },
});
