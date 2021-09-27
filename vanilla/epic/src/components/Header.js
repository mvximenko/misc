import data from '../data';

const Header = () => {
  const template = `
    <header>
      <h1 class='heading'>Epic Library ${data.length}</h1>
    </header>
  `;

  return template;
};

export default Header;
