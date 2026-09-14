const input = document.querySelector("#input");
const textArea = document.querySelector("#textArea");
const button = document.querySelector("#button");

button.addEventListener("click", (e) => {
    e.preventDefault()
    const deta = new Date().toLocaleDateString()

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

    const span = document.createElement("span")
    span.textContent = deta
    console.log( deta );


    article.append(h1, p, span);

    document.body.append(article);

    input.value = "";
    textArea.value = "";
});