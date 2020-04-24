<template>

  <div id="body" class="adminLoginBody">

  <div id="body" class="adminLoginBox">

    <img class="titleImg" src="../assets/adminLogin/adminLogin.png" alt />
    <form class="adminLoginForm" onsubmit="return false">
      <div class="form-item">
        <label class="adminLoginLabel">帳號</label>
        <div class="input-wrapper">
          <input
            class="adminLoginInput"
            type="text"
            id="username"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            data-lpignore="true"
          />
        </div>
      </div>
      <div class="form-item">
        <label class="adminLoginLabel">密碼</label>
        <div class="input-wrapper">
          <input
            class="adminLoginInput"
            type="password"
            id="password"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            data-lpignore="true"
          />
          <button class="adminLoginBtn" type="button" id="eyeball">
            <div class="eye"></div>
          </button>
          <div id="beam"></div>
        </div>
      </div>
      <button class="adminLoginBtn" id="submit">登入</button>
    </form>
  </div>

</div>



</template>

<script>

import "@/adminLogin";
// import { log } from 'three';
// const root = document.documentElement;
// const eye = document.getElementById("eyeball");
// const beam = document.getElementById("beam");
// const passwordInput = document.getElementById("password");

// root.addEventListener("mousemove", e => {
//   let rect = beam.getBoundingClientRect();
//   let mouseX = rect.right + rect.width / 2;
//   let mouseY = rect.top + rect.height / 2;
//   let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
//   let degrees = rad * (20 / Math.PI) * -1 - 350;

//   root.style.setProperty("--beamDegrees", `${degrees}deg`);
// });

// eye.addEventListener("click", e => {
//   e.preventDefault();
//   document.body.classList.toggle("show-password");
//   passwordInput.type = passwordInput.type === "password" ? "text" : "password";
//   passwordInput.focus();
// });

export default {
  // methods: {
  //   myfnc: () => {
  //     const root = document.documentElement;
  //     const eye = document.getElementById("eyeball");
  //     const beam = document.getElementById("beam");
  //     const passwordInput = document.getElementById("password");

  //     root.addEventListener("mousemove", e => {
  //       let rect = beam.getBoundingClientRect();
  //       let mouseX = rect.right + rect.width / 2;
  //       let mouseY = rect.top + rect.height / 2;
  //       let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
  //       let degrees = rad * (20 / Math.PI) * -1 - 350;

  //       root.style.setProperty("--beamDegrees", `${degrees}deg`);
  //     });

  //     // eye.addEventListener("click", e => {

  //       // console.log("123")
  //       // e.preventDefault();
  //       // document.body.classList.toggle("show-password");
  //       // passwordInput.type =
  //       //   passwordInput.type === "password" ? "text" : "password";
  //       // passwordInput.focus();
  //     // });
  //   },
  //   click: (e) => {

  //     console.log("123");
  //       e.preventDefault();
  //       document.body.classList.toggle("show-password");
  //       passwordInput.type =
  //         passwordInput.type === "password" ? "text" : "password";
  //       passwordInput.focus();
  //   }
  // }
};
</script>