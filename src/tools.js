export const URL_NEWS = 'https://mysterious-reef-29460.herokuapp.com/api/v1/news';

export async function getNews() {
  const data = await (await fetch(URL_NEWS)).json();
  return data.data;
}
