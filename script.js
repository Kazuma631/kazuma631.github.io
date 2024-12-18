const arrVerses = ["A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another. (John 13:34)", "Anyone who does not love does not know God, because God is love. (1 John 4:8)"];
function nextVerse() {
  let randomNum = Math.floor(Math.random() * 2);
  document.getElementById("verse").innerHTML = arrVerses[randomNum];
}
