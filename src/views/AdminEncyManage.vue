<template>
  <div>
    <main class="EncyMainContent">
      <h1 class="manageTitle">知識百科 管理中心</h1>
      <router-link class to="/center/encyEdit">
        <button class="editEncy">新增百科內容</button>
      </router-link>
      <section class="EncytableSection">
        <div class="enct-header">
          <table class="EncymanageTab" cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>編號</th>
                <th>標題</th>
                <th>內容</th>
                <th>編輯</th>
              </tr>
            </thead>
          </table>
        </div>

        <div class="enct-content">
          <table class="EncymanageTab" cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td>xxxxx</td>
                <td>我是標題</td>
                <td>我是內容</td>
                <td>
                  <a href="#">
                     <img class="editImg" src="@/assets/icon/edit_btn.svg" alt />
                    <img class="editImg" src="@/assets/icon/edit_pen.svg" alt />
                  </a>
                </td>
              </tr>
              <tr>
                <td>xxxxx</td>
                <td>我是標題</td>
                <td>我是內容</td>
                <td>
                  <a href="#">
                    <img class="editImg" src="@/assets/icon/edit_btn.svg" alt />
                    <img class="editImg" src="@/assets/icon/edit_pen.svg" alt />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

