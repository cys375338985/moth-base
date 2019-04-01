<template>
        <Layout class="page">
            <HeaderBar></HeaderBar>
            <Layout class="page-body">
               <Sider class="sider">
                   <SiderMent></SiderMent>
               </Sider>
                <Content>
                    <router-view></router-view>
                    <FooterBar></FooterBar>
                </Content>
            </Layout>

        </Layout>
</template>

<script>
    import SiderMent from "components/SiderMenu.vue"
    import HeaderBar from  'components/HeaderBar.vue'
    import FooterBar from 'components/FooterBar.vue'
    export default {
        name: "BaseLayout",
        components:{
            SiderMent,
            HeaderBar,
            FooterBar
        }
    }
</script>

<style lang="less">
   @import "../theme/index.less";
    .page{
        position: fixed;
        display: block;
        height: 100%;
        width: 100%;
        min-width:  1400px;
        overflow-y: scroll;
        .page-body{;
            height: calc(~"100% - 64px");
        }
    }
</style>