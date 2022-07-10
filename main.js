import './style.css';

fetch("https://picsum.photos/v2/list?page=2&limit=100")
.then((res) => res.json())
.then((listofphotos) => {
  const i = Math.floor(Math.random() * 100);

  console.log(i, listofphotos[i].id, listofphotos[i].download_url);

  const button = document.querySelector('#button');

  button.addEventListener("click", () => {
    location.reload();
  })

  document.querySelector("#app").innerHTML += `
  <h2> ${listofphotos[i].author} - ${listofphotos[i].id} <h2>

<img src="${listofphotos[i].download_url}" alt="Random Picture" />
`
}); 
