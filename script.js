function classification() {
    let scoreInput = prompt('Digite sua nota: ');
    let finalScore
  
    if (scoreInput >= 9 && scoreInput <= 10) {
      return finalScore = 'A'
    } else if (8 <= scoreInput && scoreInput < 9) {
      return finalScore = 'B'
    } else if (7 <= scoreInput && scoreInput < 8) {
      return finalScore = 'C'
    } else if (6 <= scoreInput && scoreInput < 7) {
      return finalScore = 'D'
    } else if (0 <= scoreInput && scoreInput < 6) {
      return finalScore = 'F'
    } else {
      return finalScore = 'Nota inválida, tente novamente'
    }
}
  
  const Box = {
    open() {
      document.getElementById('scoreDisplay').innerHTML = classification()
    }
}