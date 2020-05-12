<template>
  <div class="MemberUpdate_right">
    <div class="MemberUpdate_right_head">
      <div class="MemberUpdate_right_head_text">
        <h2>個人資料修改</h2>
      </div>
    </div>
    <div class="MemberUpdate_right_bottom">
      <div class="bottom_form">
        <div class="update_left">
          <ul>
            <li>果粉編號</li>
            <li>帳號</li>
            <!-- <li>密碼</li> -->
            <li>密碼</li>
            <li>果粉姓名</li>
            <li>暱稱</li>
            <li>性別</li>
            <li>連絡電話</li>
            <li>e-mail</li>
          </ul>
        </div>
        <div class="update_right">
          <p>{{member.no}}</p>
          <p>{{member.acc}}</p>
          <!-- <input type="text">
          <br>-->
          <button type="button">修改密碼</button>
          <br />
          <input type="text" v-model="member.name" />
          <br />
          <input type="text" v-model="member.nick" />
          <br />
          <p>{{member.gender}}</p>
          <!-- <label for=""><input type="radio">男</label>
                    <label for=""><input type="radio">女</label>
          <label for=""><input type="radio">其他</label>-->
          <!-- <br> -->
          <input type="text" v-model="member.phone" />
          <br />
          <input type="text" v-model="member.email" />
          <button class="submit_button" @click="update">
            送出
            <!-- <div class="correct">
                            <p>確定</p>
            </div>-->
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      member: {
        no: "",
        acc: "",
        name: "",
        nick: "",
        gender: "",
        phone: "",
        email: ""
      }
    };
  },
  created() {
    const api = "/api/api_memberStatus.php";

    this.$http
      .post(api)
      .then(res => {
        const data = res.data;

        if (data != "") {
          this.member = {
            no: data.no,
            acc: data.acc,
            name: data.name,
            nick: data.nick,
            phone: 0 + data.phone,
            email: data.email
          };

          if (data.gender == 1) {
            this.member.gender = "男";
          } else if (data.gender == 2) {
            this.member.gender = "女";
          } else if (data.gender == 3) {
            this.member.gender = "其它";
          }
        }
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  },
  methods: {
    update: function() {
      const api = "/api/api_memberUpdate.php";

      this.$http
        .post(api, JSON.stringify(this.member))
        .then(res => {
          const data = res.data;

          if (data == "1") {
            alert("修改成功！");

            this.updateSession();
          }
        })
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
    },
    updateSession: function() {
      const api = "/api/api_memberUpdateSession.php";

      this.$http
        .post(api, JSON.stringify(this.member))
        .then(res => {
          const data = res.data;

          if (data != "") {
            // this.$emit("update", true);
          }
        })
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
    }
  }
};
</script>