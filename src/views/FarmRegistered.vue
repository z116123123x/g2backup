<template>
  <div class="Registered">
    <div class="Registered_head">
      <div class="Registeredt_head_text">
        <h2>申請成為果農</h2>
      </div>
    </div>
    <div class="Registered_bottom">
      <div class="bottom_form">
        <div class="Registered_left">
          <ul>
            <li>果粉編號</li>
            <li>帳號</li>
            <li>果粉姓名</li>
            <li>暱稱</li>
            <li>性別</li>
            <li>連絡電話</li>
            <li>e-mail</li>
            <li>
              <span>
                果農地址
                (若無則免填)
              </span>
            </li>
          </ul>
        </div>
        <div class="Registered_right">
          <p>{{member.no}}</p>
          <p>{{member.acc}}</p>
          <p>{{member.name}}</p>
          <p>{{member.nick}}</p>
          <p>{{member.gender}}</p>
          <!-- <label for>
            <input type="radio" />男
          </label>
          <label for>
            <input type="radio" />女
          </label>
          <label for>
            <input type="radio" />其他
          </label>
          <br /> -->
          <p>{{member.phone}}</p>
          <p>{{member.email}}</p>
          <input type="text" v-model="member.add" />
          <div class="submit_button">
            <div class="correct">
              <p>確定</p>
            </div>
          </div>
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
  }
};
</script>