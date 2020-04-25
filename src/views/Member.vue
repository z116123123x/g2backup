<template>
    <div class="contain">
        <aside class="left">
            <div class="head_portrait">
                <div class="head_img_box">
                    <img src="../assets/navbar_account_img.svg" alt="">
                </div>
                <ul>
                    <li>設定頭像</li>
                    <li class="nick">暱稱</li>
                    <li class="fans">身分別:果粉</li>
                </ul>
            </div>

            <div class="info">
                <ul>
                    <li><router-link to="/main/member/update">個人資料修改</router-link></li>
                    <li><router-link to="/main/member/order">訂單管理</router-link></li>
                    <li><router-link to="/main/member/track">追蹤名單管理</router-link></li>
                </ul>
            </div>
            <div class="farm_button">
                <div class="farm">
                    <p>切換為果農</p>
                </div>
            </div>
        </aside>
        <router-view />
    </div>
</template>
