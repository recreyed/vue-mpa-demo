<template>
  <div id="app">
    <div id="nav">
      <a @click="goFn('')">Index</a> |
      <a @click="goFn('page1')">Page1</a> |
      <a @click="goFn('page2')">Page2</a> |
    </div>
    <button @click="login">登录</button>
    <button @click="listFile">列出文件</button>
    <button @click="getFileInfo">获取文件信息</button>
    <router-view />
  </div>
</template>

<script>
import { s3Login,s3FileList,s3FileInfo } from '@/services/moduleA'
export default {
  methods: {
    goFn(name) {
      // location.href = `${process.env.BASE_URL}` + name
      this.$openRouter({
        name: name,
        query: {
          text: 'hello'
        }
      })
    },
    login() {
      s3Login({}).then(res => {
        console.log(res);
      })
    },
    listFile() {
      s3FileList({bucketId:'a6a9d346992068c482400c1b'}).then(res => {
        console.log(res);
      })
    },
    getFileInfo(){
      s3FileInfo({fileId:'4_za6a9d346992068c482400c1b_f1176b3349dab3975_d20221114_m142311_c004_v0402001_t0030_u01668435791391'}).then(res=>{
        console.log(res);
      })
    }

  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>