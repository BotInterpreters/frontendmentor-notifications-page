function toggleCursor() {
  var markAsRead = document.querySelector(".mark-as-read-pointer");

  if (markAsRead.style.display === "inline") {
    markAsRead.style.display = "none";
  } else {
    markAsRead.style.display = "inline";
  }

  var angelaGray = document.querySelector(".angela-cursor");

  if (angelaGray.style.display === "inline") {
    angelaGray.style.display = "none";
  } else {
    angelaGray.style.display = "inline";
  }

  var firstTournament = document.querySelector(".first-tournament-cursor");

  if (firstTournament.style.display === "inline") {
    firstTournament.style.display = "none";
  } else {
    firstTournament.style.display = "inline";
  }

  var chessPointer = document.querySelector(".chess-pointer");

  if (chessPointer.style.display === "inline") {
    chessPointer.style.display = "none";
  } else {
    chessPointer.style.display = "inline";
  }

  var innerPointer = document.querySelector(".inner-pointer");

  if (innerPointer.style.display === "inline") {
    innerPointer.style.display = "none";
  } else {
    innerPointer.style.display = "inline";
  }

  var privateMessage = document.querySelector(".private-message");

  var computedColor = window.getComputedStyle(privateMessage).backgroundColor;
  
  if (computedColor === "rgb(229, 239, 249)") {
      privateMessage.style.backgroundColor = "#fff";
  } else {
      privateMessage.style.backgroundColor = "#E5EFF9";
  }
  
}
