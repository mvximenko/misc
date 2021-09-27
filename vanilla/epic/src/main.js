import App from './App';
import { setTitles } from './components/Titles';

const app = async () => {
  document.getElementById('app').appendChild(App());
  document.getElementById('search').addEventListener('keyup', (e) => {
    setTitles(e.target.value);
  });
};

app();
