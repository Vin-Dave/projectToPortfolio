const getUsers = (e) => {
  e.preventDefault();

  const usersNumber = document.querySelector('[name = "users-number"]').value;
  const usersGender = document.querySelector('[name = "gender"]').value;
  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${
    usersGender === "both" ? "male,female" : usersGender
  }`;
  console.log(url);

  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("błąd");
      }

      return response.json();
      console.log(response);
    })
    .then((data) => console.log(data))

    .catch((error) => console.log(error));
};

document.querySelector(".button").addEventListener("click", getUsers);
