<template>
  <div>
    <main class="addAdminMainContent">
      <h1 class="manageTitle">
        管理員管理
        <span class="manageSubTitle">新增管理員</span>
      </h1>

      <table class="addAdminTab" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <th>編號</th>
          <td>xxxxxx</td>
        </tr>
        <tr>
          <th>
            <label for="addAdminName">姓名</label>
          </th>
          <td>
            <input id="addAdminName" type="text" value />
          </td>
        </tr>
        <tr>
          <th>
            <label for="addAdminAccount">帳號</label>
          </th>
          <td>
            <input id="addAdminAccount" type="text" value />
          </td>
        </tr>
        <tr>
          <th>
            <label for="addAdminPSW">密碼</label>
          </th>
          <td>
            <input id="addAdminPSW" type="text" value />
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
          <div class="adAdminBtnSec">
            <input id="addAdminCancel" type="button" onClick="javascript:history.back(1)" value="取消" />
            <input id="addAdminSubmit" type="submit" value="送出" />
          </div>
          </td>
        </tr>
      </table>
    </main>
  </div>
</template>
