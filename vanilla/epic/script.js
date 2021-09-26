const data = [
  { id: 298630, title: 'The Escapists' },
  { id: 468670, title: 'Speed Brawl' },
  { id: 323060, title: 'Tharsis' },
  { id: 356040, title: 'Sheltered' },
  { id: 485510, title: 'Nioh: Complete Edition / 仁王 Complete Edition' },
  { id: 334940, title: "Yoku's Island Express" },
  { id: 984800, title: 'Automachef' },
  { id: 978300, title: 'Saints Row®: The Third™ Remastered' },
  { id: 857980, title: 'Void Bastards' },
  { id: 360830, title: 'Yooka-Laylee' },
  { id: 290300, title: 'Rebel Galaxy' },
  { id: 609490, title: 'Minit' },
  { id: 752590, title: 'A Plague Tale: Innocence' },
  { id: 574090, title: 'MOTHERGUNSHIP' },
  { id: 1282590, title: 'Train Sim World® 2' },
  { id: 242860, title: 'Verdun' },
  { id: 271240, title: 'Offworld Trading Company' },
  { id: 306760, title: 'Obduction' },
  { id: 327670, title: 'Ironcast' },
  { id: 1336120, title: 'Bridge Constructor: The Walking Dead' },
  { id: 763250, title: 'The Spectrum Retreat' },
  { id: 584400, title: 'Sonic Mania' },
  { id: 389140, title: 'Horizon Chase Turbo' },
  { id: 728880, title: 'Overcooked! 2' },
  { id: 595790, title: 'Hell is Other Demons' },
  { id: 870780, title: 'Control Ultimate Edition' },
  { id: 323190, title: 'Frostpunk' },
  { id: 945360, title: 'Among Us' },
  { id: 1225330, title: 'NBA 2K21' },
  { id: 437160, title: "The Lion's Song: Episode 1 - Silence" },
  { id: 1042780, title: 'Pine' },
  { id: 214490, title: 'Alien: Isolation' },
  { id: 555150, title: 'The First Tree' },
  { id: 234270, title: "Ken Follett's The Pillars of the Earth" },
  { id: 292910, title: 'Deponia: The Complete Journey' },
  { id: 828740, title: 'Tales of the Neon Sea' },
  // hitman 3 here
  { id: 852300, title: 'Creature in the Well' },
  { id: 464920, title: 'Surviving Mars' },
  { id: 251060, title: 'Wargame: Red Dragon' },
  { id: 304650, title: 'SUNLESS SEA' },
  { id: 320140, title: 'Absolute Drift' },
  { id: 371200, title: 'Halcyon 6: Starbase Commander' },
  { id: 287390, title: 'Metro: Last Light Redux' },
  { id: 527230, title: 'For The King' },
  { id: 612390, title: 'Dandara: Trials of Fear Edition' },
  { id: 226860, title: 'Galactic Civilizations III' },
  { id: 1237950, title: 'STAR WARS™ Battlefront™ II' },
  { id: 873940, title: 'Crying Suns' },
  { id: 648350, title: 'Jurassic World Evolution' },
  { id: 200710, title: 'Torchlight II' },
  { id: 463980, title: 'Solitairica' },
  { id: 313120, title: 'Stranded Deep' },
  { id: 481510, title: 'Night in the Woods' },
  { id: 666140, title: 'My Time At Portia' },
  { id: 262060, title: 'Darkest Dungeon®' },
  { id: 304430, title: 'INSIDE' },
  { id: 245620, title: 'Tropico 5' },
  { id: 286690, title: 'Metro 2033 Redux' },
  { id: 214490, title: 'Alien: Isolation' },
  { id: 18500, title: 'Defense Grid: The Awakening' },
  { id: 305620, title: 'The Long Dark' },
  { id: 314660, title: "Oddworld: New 'n' Tasty" },
  { id: 255710, title: 'Cities: Skylines' },
  { id: 362960, title: 'Tyranny' },
  { id: 291650, title: 'Pillars of Eternity' },
  { id: 493900, title: 'Dungeons 3' },
  { id: 1449280, title: 'Ghostbusters: The Video Game Remastered' },
  { id: 1092660, title: 'Blair Witch' },
  { id: 275180, title: 'Costume Quest 2' },
  { id: 1029890, title: 'Layers of Fear 2' },
  { id: 496300, title: 'Kingdom: New Lands' },
  { id: 239200, title: 'Amnesia: A Machine for Pigs' },
  { id: 418460, title: 'Rising Storm 2: Vietnam' },
  { id: 384190, title: 'ABZU' },
  { id: 572890, title: 'Pikuniku' },
  { id: 1368820, title: 'RollerCoaster Tycoon® 3: Complete Edition' },
  { id: 447040, title: 'Watch_Dogs® 2' },
  { id: 251830, title: 'Stick it to The Man!' },
  { id: 1100600, title: 'Football Manager 2020' },
  { id: 447120, title: 'Where the Water Tastes Like Wine' },
  { id: 503940, title: 'Railway Empire' },
  { id: 590380, title: 'Into the Breach' },
  { id: 346940, title: 'Shadowrun: Hong Kong - Extended Edition' },
  { id: 300550, title: "Shadowrun: Dragonfall - Director's Cut" },
  { id: 234650, title: 'Shadowrun Returns' },
  { id: 863550, title: 'HITMAN™ 2' },
  { id: 488730, title: "God's Trigger" },
  { id: 311690, title: 'Enter the Gungeon' },
  { id: 1144770, title: 'SLUDGE LIFE' },
  { id: 204060, title: 'Superbrothers: Sword & Sworcery EP' },
  { id: 322110, title: '20XX' },
  { id: 371970, title: 'Barony' },
  { id: 271590, title: 'Grand Theft Auto V' },
];

const API_IMG = 'https://cdn.akamai.steamstatic.com/steam/apps';
const API_STORE = 'https://store.steampowered.com/app';

const title = document.getElementById('title');
title.innerHTML = `Epic Library ${data.length}`;

const items = document.getElementById('items');

data.forEach((item) => {
  items.innerHTML += `
    <div class="item card">
      <a class="link" href="${API_STORE}/${item.id}">
        <img
          alt="${item.name}"
          loading="lazy"
          src="${API_IMG}/${item.id}/header.jpg"
        >
      </a>
    </div>`;
});
