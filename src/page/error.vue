<template>
    <Layout class="page">
        <HeaderBar></HeaderBar>
            <Content>
                <div class="error-content">
                    <!--资源不存在 -->
                    <p v-if="type === 'nores'" class="error-msg">
                        你访问的资源不存在
                    </p>
                    <p v-if="type === 'noauth'" class="error-msg">
                        你没有访问该资源的权限
                    </p>
                    <p v-if="type === 'error'" class="error-msg">
                        好像哪里不对了
                    </p>
                </div>
            </Content>
        <FooterBar></FooterBar>
    </Layout>

</template>
<script>
    import HeaderBar from  'components/HeaderBar.vue'
    import FooterBar from 'components/FooterBar.vue'
    export default {
       name:"ErrorPage",
        data(){
           return {
               type:this.$route.params.type||"error"
           }
        },
        components:{
            HeaderBar,
            FooterBar
        }
    }
</script>
<style lang="less">
</style>