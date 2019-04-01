<template>
    <div class="app-page">
        {{msg}}
        <Button v-on:click="click">点我</Button>
    </div>
</template>

<script>
import mUtil from  "util/mm.js"
export default {
  name: 'app',
  components: {
  },
    methods:{
        click(){
            console.log("aaa");
            mUtil.successTips("haha")
        }
    },
    computed:{
        msg(){
            return this.$store.state.appstate.message
        }
    }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-page{
    color: aqua;
}
</style>
