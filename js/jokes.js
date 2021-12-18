let jokes = document.getElementsByClassName('container');

for(i = 0; i < jokes.length; i ++){
  let card = jokes[i].querySelector(".card");
  jokes[i].onclick = () => {
    card.classList.toggle('flipped')
  }
}
