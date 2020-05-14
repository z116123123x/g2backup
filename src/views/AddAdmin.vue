<template>
  <div>
    <main class="addAdminMainContent">
      <h1 class="manageTitle">
        管理員管理
        <span class="manageSubTitle">| 新增管理員</span>
      </h1>

      <!-- <form action="../api_addAdmin.php" method="post"> -->
      <table class="addAdminTab" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <th>
            <label for="addAdminName">姓名</label>
          </th>
          <td>
            <input id="addAdminName" type="text" v-model="addAdmin.name" />
          </td>
        </tr>
        <tr>
          <th>
            <label for="addAdminAccount">帳號</label>
          </th>
          <td>
            <input id="addAdminAccount" type="text" v-model="addAdmin.acc" />
          </td>
        </tr>
        <tr>
          <th>
            <label for="addAdminPSW">密碼</label>
          </th>
          <td>
            <input id="addAdminPSW" type="password" v-model="addAdmin.psw" />
          </td>
        </tr>
        <!-- <tr>
          <th>
            <label for="addAdminPSWcheck">密碼確認</label>
          </th>
          <td>
            <input id="addAdminPSWsubmit" type="text" value />
          </td>
        </tr>-->

        <tr>
          <th></th>
          <td>
            <div class="adAdminBtnSec">
              <input
                id="addAdminCancel"
                type="button"
                onclick="javascript:history.back(1)"
                value="取消"
              />
              <input id="addAdminSubmit" type="submit" value="送出" @click="addAdminF" />
            </div>
          </td>
        </tr>
      </table>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addAdmin: {
        name: "",
        acc: "",
        psw: ""
      }
    };
  },

  methods: {
    addAdminF: function() {
      const api = "/api/api_addAdmin.php";

      this.$http
        .post(api, JSON.stringify(this.addAdmin))
        .then(res => {
          this.data = res.data;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>


