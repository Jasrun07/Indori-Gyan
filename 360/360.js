const mapFrame = document.getElementById('mapFrame');
const locationLabel = document.getElementById('locationLabel');

const locations = {
  rajwada: {
    name: "Rajwada, Indore",
    url: "https://www.google.com/maps/embed?pb=!4v1743957867667!6m8!1m7!1sSGNTg_9ZRToAAAQfDS0PhQ!2m2!1d22.71854330633976!2d75.85482559440234!3f281.49286201586574!4f-0.8088413951179803!5f0.7820865974627469"
  },
  patalpani: {
    name: "Patalpani, Indore",
    url: "https://www.google.com/maps/embed?pb=!4v1743958712484!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGN6ZVhzSVE.!2m2!1d22.50388926222569!2d75.79871709452715!3f52.04624711912131!4f-22.174785460164316!5f0.7820865974627469"
  },
  regional: {
    name: "Regional Park, Indore",
    url: "https://www.google.com/maps/embed?pb=!4v1743959657594!6m8!1m7!1sC6bcFcdIYHrROJAVskr5Tw!2m2!1d22.67663764229896!2d75.85554243192841!3f89.3226639251201!4f-2.1677453998027687!5f0.7820865974627469"
  },
  chapaan: {
    name: "56 Dukaan, Indore",
    url: "https://www.google.com/maps/embed?pb=!4v1743960157105!6m8!1m7!1snCbApDkEkk0kZADWwTeCnA!2m2!1d22.72350331288325!2d75.88478916022947!3f352.7884545624879!4f-12.145402893474724!5f0.7820865974627469"
  }
};

function changeView() {
  const selected = document.getElementById('locationSelect').value;
  if (selected && locations[selected]) {
    mapFrame.src = locations[selected].url;
    locationLabel.textContent = locations[selected].name;
  } else {
    mapFrame.src = "";
    locationLabel.textContent = "";
  }
}
