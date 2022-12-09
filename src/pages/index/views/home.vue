<template>
  <div class="home">
    <img src="~@/images/logo.png">
    <button @click="open">toast</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    open(){
      this.$toast.show('嘿嘿嘿',1000)
    }
  },
}
</script>
