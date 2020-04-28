<template>
  <div class="shopping">
    <div class="content">
      <div class="step-box"></div>
      <div class="form">
        <div class="form-content">
          <p class="title">購物籃明細：</p>
          <div class="tr head-bar">
            <div class="td check-box">
              <input type="checkbox" name="choose" />
            </div>
            <div class="td img">圖片</div>
            <div class="td name">名稱</div>
            <div class="td seller">賣家</div>
            <div class="td price">單價</div>
            <div class="td amount">數量</div>
            <div class="td subtotal">小計</div>
            <div class="td operating">操作</div>
          </div>
          <div class="tr" v-for="item in arr" :key="item.id">
            <div class="td check-box">
              <input type="checkbox" name="choose" />
            </div>
            <div class="td img">
              <img src="@/assets/shop/item_001.png" />
            </div>
            <div class="td name">{{item.name}}</div>
            <div class="td seller">{{item.seller}}</div>
            <div class="td price">$ {{item.price}}</div>
            <div class="td amount">
              <div class="input">
                <input type="number" v-model="item.amount" />
                <div class="button">
                  <button @click="addAmount(item)">+</button>
                  <button @click="subAmount(item)">-</button>
                </div>
              </div>
            </div>
            <div class="td subtotal">$ {{item.amount * item.price}}</div>
            <div class="td operating">商品詳細 刪除</div>
          </div>
          <p class="total">總金額 {{total}} 元</p>
        </div>
        <router-link to="/main/member/checkInfo" type="button" class="btn">進行結帳</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          id: 1,
          name: "愛文芒果",
          seller: "蓬蓬草莓姨",
          price: 1920,
          amount: 1
        },
        {
          id: 2,
          name: "愛文芒果",
          seller: "蓬蓬草莓姨",
          price: 135,
          amount: 1
        },
        {
          id: 3,
          name: "愛文芒果",
          seller: "蓬蓬草莓姨",
          price: 1000,
          amount: 1
        }
      ]
    };
  },
  computed: {
    total: function() {
      let sum = 0;

      for (let i = 0; i < this.arr.length; i++) {
        sum += this.arr[i].amount * this.arr[i].price;
      }

      return sum;
    }
  },
  methods: {
    addAmount: function(item) {
      item.amount++;
    },
    subAmount: function(item) {
      item.amount--;
    }
  }
};
</script>