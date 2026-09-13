const input = document.getElementById("input");
const textArea = document.getElementById("textArea");
const button = document.getElementById("button");

button.addEventListener("click", () => {

    if (input.value === "" || textArea.value === "") {
        alert("Titolo o paragrafo vuoti");
        return;
    }

    const article = document.createElement("article");
    article.classList.add("containerArticle")

    const h1 = document.createElement("h1");
    h1.textContent = input.value;

    const p = document.createElement("p");
    p.textContent = textArea.value;

    article.append(h1, p);

    document.body.append(article);

    input.value = "";
    textArea.value = "";
});