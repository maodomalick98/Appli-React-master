

const API = "cdb76cf89abc3321ecd29e1750691822";


export function RechercheFilm(text, page){
 const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API +
  '&language=fr&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}


export function ImagesFilms(name)
{
  return 'https://image.tmdb.org/t/p/w300' + name
}

export function DetailFilm (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
