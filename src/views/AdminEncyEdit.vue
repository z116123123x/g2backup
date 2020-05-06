<template>
  <div>
    <main class="encyEdit">
      <h1 class="manageTitle">
        知識百科 管理中心
        <span class="manageSubTitle">百科內容新增/修改</span>
      </h1>

      <table class="encyEditTab" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <th>編號</th>
          <td>xxxxxx</td>
        </tr>

        <tr>
          <th>
            <label for="encyTitle">標題</label>
          </th>
          <td>
            <textarea name="encyTitle" id="encyTitle"></textarea>
          </td>
        </tr>
        <tr>
          <th>
            <label for="encyContent">內容</label>
          </th>
          <td>
            <textarea name="encyContent" id="encyContent"></textarea>
          </td>
        </tr>

        <tr>
          <th>圖片</th>

          <td>
            <input type="file" name="upFile[]" />
            <br />
            <input type="file" name="upFile[]" />
            <br />
            <input type="file" name="upFile[]" />
            <br />
          </td>
        </tr>
        <tr>
          <th>影片</th>
          <td>
            <input type="file" name="upFile[]" />
          </td>
        </tr>
        <tr>
          <th>標籤</th>
          <td>
            <button class="encyTag">+ 春季</button>
            <button class="encyTag">+ 秋季</button>
            <button class="encyTag">+ 夏季</button>
            <button class="encyTag">+ 冬季</button>
            <button class="encyTag">+ 西瓜</button>
            <button class="encyTag">+ 芒果</button>
            <button class="encyTag">+ 蓮霧</button>
            <button class="encyTag">+ 鳳梨</button>
            <button class="encyTag">+ 草莓</button>
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
          <div class="encyEditBtnSec">
            <input id="encyEditCancel" type="button" onClick="javascript:history.back(1)" value="取消" />
            <input id="ecnyEditSubmit" type="submit" value="送出" />
          </div>
            
          </td>
        </tr>
      </table>
    </main>
  </div>
</template>

