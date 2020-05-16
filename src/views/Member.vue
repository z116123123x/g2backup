<template>
  <div class="membercontain">
    <aside class="left ">
      <div class="head_portrait">
        <div class="head_img_box">
          <img id="MemberPic" v-bind:src="member.img" />
        </div>
        <ul>
          <li>
            <label for="upMemberPic" @change="changeMemPic"
              >設定頭像
              <input type="file" id="upMemberPic" style="display: none;"
            /></label>
          </li>
          <li class="nick">
            暱稱:<span>{{ member.nick }}</span>
          </li>
          <li class="fans">身分別:<span>果粉</span></li>
        </ul>
      </div>

      <div class="info">
        <ul>
          <li>
            <router-link to="/main/member/information">個人資訊</router-link>
          </li>
          <li>
            <router-link to="/main/member/update">個人資料修改</router-link>
          </li>
          <li>
            <router-link to="/main/member/order">訂單管理</router-link>
          </li>
          <li>
            <router-link to="/main/member/track">追蹤名單管理</router-link>
          </li>
          <li>
            <router-link to="/main/member/shopping">購物籃</router-link>
          </li>
        </ul>
      </div>
      <div class="member_button">
        <div class="befarm">
          <router-link to="/main/member/farmRegistered">
            <button-more class="become_farmer" msg="成為果農"></button-more>
          </router-link>
        </div>
      </div>
      <div class="member_button">
        <div class="changefarm">
          
          <router-link to="/farm/info">
             <button-more class="goto_farmer" msg="切換果農"></button-more>
           </router-link>
        </div>
      </div>
      <button type="button" class="btn_drawer">&#9658;</button>
    </aside>
    <router-view @update="update" />
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      formData: new FormData(),
      member: {
        no: "",
        acc: "",
        name: "",
        nick: "",
        gender: "",
        phone: "",
        email: "",
        img: "",
      },
    };
  },
  created() {
    const api = "/api/api_memberStatus.php";

    this.$http
      .post(api)
      .then((res) => {
        const data = res.data;

        console.log(data.img);

        if (data != "") {
          this.member = {
            no: data.no,
            acc: data.acc,
            name: data.name,
            nick: data.nick,
            phone: 0 + data.phone,
            email: data.email,
            gender: data.gender,
            img: data.img,
          };
        }
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  },
  mounted() {
    if (window.innerWidth < 768) {
      $("aside.left").addClass("popover");
      $("button.btn_drawer").on("click", function() {
        $("aside.left").toggleClass("popover");
      });
    }

    $(window).resize(function() {
      if (window.innerWidth < 768) {
        $("aside.left").addClass("popover");
        $("button.btn_drawer").on("click", function() {
          $("aside.left").toggleClass("popover");
        });
      } else {
        $("aside.left").removeClass("popover");
      }
    });
  },
  methods: {
    update: function(s) {
      // this.$emit("loginStatus", s);
    },
    changeMemPic: function(e) {
      e.target.files[0];

      let reader = new FileReader();

      reader.onload = function(e) {
        document.getElementById("MemberPic").src = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      this.formData.append("file", e.target.files[0]);

      this.$http
        .post("/api/api_changeMemPic.php", this.formData)
        .then((res) => {
          if (res.data != "") {
            console.log(res.data);
          } else {
          }
        })
        .catch((err) => console.log(err));

      this.member.img = "./api/MemPic/member" + e.target.files[0].name;

      this.$http
        .post("/api/api_getMemPic.php", JSON.stringify(this.member))
        .then((res) => {
          const data = res.data;

          if (data != " ") {
            alert("修改成功！");
          }
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    },
  },
};
</script>
