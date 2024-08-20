function contarPalavra() {
    let text = document.getElementById("textarea").value;
    let result = text.split(" ").length; /* o split vai pegar o text e separe algo pra gente de um determinado valor  */
    document.getElementById("resultado").innerHTML = "Você tem:  " + result + " palavras"
}