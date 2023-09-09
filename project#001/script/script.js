fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => console.log(data));

axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
  //  document.body.style.backgroundImage("src:", `${response.data.message}`);
  console.log(response);
});
async function chechAPI() {
  try {
    const response = await axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => console.log(response));
  } catch (e) {
    console.log(e);
  }
}
chechAPI();
