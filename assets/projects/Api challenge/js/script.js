let button = document.getElementById("button-api");

let div = document.getElementById("info-card");
button.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const id = data["id"];
      for (let index = 0; index < 1; index++) {
        div.innerHTML += `
        <div class="grid-element">
            <div>
                <h2>${data["completed"]}</h2>
                <h5>${data["id"]}</h5>
                <p>${data["title"]}</p>
               <p> ${data["userId"]}</p>
            </div>
        </div>
        `;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  /*Have a nice day */
});
