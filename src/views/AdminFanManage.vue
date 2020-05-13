<template>
  <div>
    <main class="fanManageMainContent">
      <h1 class="manageTitle">果粉 管理中心</h1>
      <section class="aFanTableSection">
        <div class="aft-header">
          <table class="fanManageTab" cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>編號</th>
                <th>帳號</th>
                <th>姓名</th>
                <th>聯絡電話</th>
                <th>E-mail</th>
                <th>狀態</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="aft-content">
          <table class="fanManageTab" cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr v-for="row in data" :key="row.no">
                <td>{{row.no}}</td>
                <td>{{row.acc}}</td>
                <td>{{row.name}}</td>
                <td>{{row.phone}}</td>
                <td>{{row.email}}</td>
                <td>
                  <input class="statusBtn" type="checkbox" :id="'switch'+row.no" />
                  <label class="statusBtnLabel" :for="'switch'+row.no">Toggle</label>
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      no: "",
      acc: "",
      name: "",
      phone:"",
      email: "",
      
      data: []
    };
  },
  created(){
    const api ="/api/api_adminFanManage.php";

    this.$http
    .post(api) // 將api承接到的資料post出去
    .then(res => {

      this.data = res.data;
    })
    .catch(err => console.log(err));
  }
};
</script>




