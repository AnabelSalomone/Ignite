const base_url = "https://api.rawg.io/api/games";

const date = new Date().toISOString().slice(0, 10);

const endUrl = `?key=${process.env.REACT_APP_API_KEY}&dates=2019-09-01,${date}`;

const parameters = '&ordering=-rating'

export const finalUrl = base_url + endUrl + parameters
