import data from '../data';
import { API_STORE, API_IMG } from '../config';

const getHTMLString = (arr) => {
  return arr.reduce(
    (state, item) =>
      (state += `
        <div class="item card">
          <a class="link" href="${API_STORE}/${item.id}">
            <img
              alt="${item.title}"
              loading="lazy"
              src="${API_IMG}/${item.id}/header.jpg"
            >
          </a>
        </div>`),
    ''
  );
};

const getTitles = (searchTerm) => {
  return searchTerm
    ? getHTMLString(
        data.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : getHTMLString(data);
};

export const setTitles = (searchTerm) => {
  document.getElementById('titles').innerHTML = getTitles(searchTerm);
};

const Titles = () => {
  const template = `
    <div id='titles'>${getTitles()}</div>
  `;

  return template;
};

export default Titles;
