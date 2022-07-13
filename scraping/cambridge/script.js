const fs = require('fs');
const scrapeIt = require('scrape-it');

function saveFile(name, arr) {
  fs.writeFileSync(`${name}.txt`, arr.join('\n'));
}

function readFile(name) {
  return fs.readFileSync(`${name}.txt`).toString().split('\n');
}

function getList() {
  let list = [];
  let notFound = [];
  const words = readFile('words');

  const config = {
    trans: {
      listItem: '.trans',
    },
    defs: {
      listItem: '.def',
    },
    egs: {
      listItem: '.eg',
    },
  };

  (async function getString(index = 0) {
    console.log(index);
    const url = encodeURI(
      `https://dictionary.cambridge.org/ru/словарь/англо-русский/${words[index]}`
    );

    const { data } = await scrapeIt(url, config);
    const { trans, defs, egs } = data;

    console.log(data);

    let str = '';

    trans.forEach((t, i) => {
      if (i !== trans.length - 1) str += t + ', ';
      else str += t;
    });

    defs.forEach((d) => (str += '<br><br>' + d));

    str += '\t' + words[index];

    egs.forEach((e) => (str += '<br><br>' + e));

    if (trans.length !== 0) {
      list.push(str);
      saveFile('list', list);
    } else {
      notFound.push(str);
      saveFile('not-found', notFound);
    }

    if (words.length - 1 !== index) setTimeout(getString, 75, index + 1);
    else console.log('List saved successfully');
  })();
}

getList();
