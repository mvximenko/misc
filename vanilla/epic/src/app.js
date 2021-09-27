import Header from './components/Header';
import Title from './components/Titles';
import Search from './components/Search';

function App() {
  const template = document.createElement('template');
  template.innerHTML = `
    <div class="container">
      ${Header()}
      ${Search()}
      ${Title()}
    </div>

   `;

  return template.content.cloneNode(true);
}

export default App;
