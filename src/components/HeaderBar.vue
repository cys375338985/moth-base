<template>
    <Header class="header">
        <div class="logo-wrapper">
            <div class="layout-logo">
                <img src="../assets/logo.png" alt="">
            </div>
        </div>
    </Header>
</template>
<script>
    export default {
        name:"HeaderBar"
    }
</script>
<style lang="less">
    @import "../theme/index.less";
    .header{
        .logo-wrapper{
            position: relative;
            width: 190px;
            height: 100%;
            display: block;
            .layout-logo{
                position: absolute;
                display: block;
                width: @logo-with;
                height: @logo-height;
                top: 50%;
                margin-top: -(@logo-height/2);
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

</style>