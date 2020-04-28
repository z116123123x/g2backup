<template>
  <div>
    <h1 class="manageTitle">管理員 管理中心</h1>

    <input class="addAdmin" type="submit" value="新增管理員" />

    <main class="AdminMainContent">
      <section class="tableSection">
        <div class="amt-header">
          <table class="adminManageTab" cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>編號</th>
                <th>帳號</th>
                <th>狀態</th>
              </tr>
            </thead>
          </table>
        </div>

        <div class="amt-content">
          <table class="adminManageTab" cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td>xxxxx</td>
                <td>admin001</td>
                <td>
                <input class="statusBtn" type="checkbox" id="switch" /><label class="statusBtnLabel" for="switch">Toggle</label>
                </td>
              </tr>
              <tr>
                <td>xxxxx</td>
                <td>admin002</td>
                <td><input class="statusBtn" type="checkbox" id="switch" /><label class="statusBtnLabel" for="switch">Toggle</label></td>
              </tr>
              <tr>
                <td>xxxxx</td>
                <td>admin003</td>
                <td><input class="statusBtn" type="checkbox" id="switch" /><label class="statusBtnLabel" for="switch">Toggle</label></td>
              </tr>
               <tr>
                <td>xxxxx</td>
                <td>admin003</td>
                <td></td>
              </tr>
               <tr>
                <td>xxxxx</td>
                <td>admin003</td>
                <td></td>
              </tr>
               <tr>
                <td>xxxxx</td>
                <td>admin003</td>
                <td></td>
              </tr>
               <tr>
                <td>xxxxx</td>
                <td>admin003</td>
                <td></td>
              </tr>
               <tr>
                <td>xxxxx</td>
                <td>admin003</td>
                <td></td>
              </tr>
               <tr>
                <td>xxxxx</td>
                <td>admin003</td>
                <td></td>
              </tr>
               <tr>
                <td>xxxxx</td>
                <td>admin003</td>
                <td></td>
              </tr>
               <tr>
                <td>xxxxx</td>
                <td>admin003</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>

  </div>
</template>



<script>
import "@/js/adminManage";
export default {};
</script>


