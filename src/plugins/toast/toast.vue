<template>
  <div class="toast" v-show="isShow">{{massage}}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      massage: '',
      isShow: false
    }
  },
  methods: {
    show(msg='默认文字',durations=2000) {
      console.log('----')
      this.massage = msg
      this.isShow = true

      setTimeout(()=>{
        this.isShow = false
      },durations)
    }
  }

}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 7px 10px;
  background-color: rgba(0,0,0,.8);
  border-radius: 4px;
  color: #fff;
  z-index: 9999;
}
</style>
