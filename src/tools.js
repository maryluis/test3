export const URL_NEWS = 'http://localhost:3000/news';

export function makeIdUrl(id) {
  return `${URL_NEWS}/${id}`;
}

export async function getNews() {
  const data = await (await fetch(URL_NEWS)).json();
  return data;
}

export async function postNew(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  await response.json();
}

export const editNews = async (url, data) => {
  await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
