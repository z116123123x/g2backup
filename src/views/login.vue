<template>
    <div class="login">
        <div class="welcome">
            <div class="movebox">
                <div class="signup nodisplay">
                        <img class="signuptitle" src="@/assets/memberlogin/Group 362.svg" alt="">
                        <form class="less-padding" autocomplete="off">
                            <span>帳號</span><input type="text">
                            <br>
                            <span>密碼</span><input type="text">
                            <br>
                            <span>請再輸入一次密碼</span><input type="text">
                            <br>
                            <span>e-mail</span><input type="text">
                            <br>
                            <div class="signupsubmit">
                                <p>登入</p>
                            </div>
                        </form>
                </div>
                <div class="signin">
                        <img class="logintitle" src="@/assets/memberlogin/Group 363.svg" alt="">
                        <form class="more-padding" autocomplete="off">
                            <span>帳號</span><input type="text" placeholder="請輸入帳號">
                            <br>
                            <span>密碼</span><input type="text" placeholder="請輸入密碼">
                            <br>
                            <div class="signinsubmit">
                                <p>登入</p>
                            </div>
                        </form>
                </div>
            </div>
            <div class="leftbox">
                <h1>已經是果粉了?</h1>
                    <img class="loginbutton" id="signin" src="@/assets/memberlogin/Group 364.svg" alt="">
            </div>
            <div class="rightbox">
                <h1>還不是果粉嗎?</h1>
                    <img class="signupbutton" id="signup" src="@/assets/memberlogin/Group 365.svg" alt="">
            </div>

        </div>
    </div>
</template>

<style>
nodisplay{
            display: none;
            transition: all .5s ease;
        }
</style>

<script>
import "@/js/memberlogin";
export default {};
</script>