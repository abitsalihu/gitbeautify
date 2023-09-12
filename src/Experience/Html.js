export default class Html {
  constructor() {
    this.searchUsername = document.querySelector(".searchBox");
    this.searchUsernameBtn = document.querySelector(".searchBtn");

    //? avatar info
    this.avatarCon = document.querySelector(".avatarMainCon");
    this.avatarImg = document.querySelector(".avatarImg");
    this.avatarName = document.querySelector(".name");
    this.avatarLocation = document.querySelector(".location");
    this.avatarWebsite = document.querySelector(".website");

    this.searchUsernameBtn.addEventListener("click", () => {
      this.url = `https://api.github.com/users/${this.searchUsername.value}`;

      this.getUserData(this.url);
    });
  }

  async getUserData(url) {
    try {
      let response = await fetch(url);
      let data = await response.json();

      console.log(response);
      if (response.ok) {
        await this.updateAvatar(data);
      } else {
        throw response.ok;
      }
    } catch (err) {
      throw console.log(err);
    }
  }

  updateAvatar(data) {
    console.log(data);
    this.avatarImg.src = data.avatar_url;
    this.avatarName.innerHTML = data.name;
    this.avatarLocation.innerHTML = data.location;
    this.avatarWebsite.href = data.blog;
    this.avatarWebsite.innerHTML = data.blog;

    this.avatarCon.classList.add("avatarActive");
  }
}
