<template>
    <Footer>
        <div class="footer-wrapper">
            <ul>
                <li class="footer-content"><a href="">关于我们</a></li>
                <li class="footer-content"><a href="">联系我们</a></li>
                <li class="footer-content"><a href="">人才招聘</a></li>
                <li class="footer-content"><a href="">供应商帮助</a></li>
                <li class="footer-content"><a href="">诊所帮助</a></li>
            </ul>
        </div>
    </Footer>
</template>
<script>
    export default {
        name:"FooterBar"
    }
</script>
<style lang="less">
    .footer-wrapper{
        display: block;
        height: 100%;
        width: 100%;
        text-align: center;
        ul{
            width: 420px;
            height: 20px;
            position: relative;
            margin: auto;
            li{
                display: block;
                height: 20px;
                width: auto;
                line-height: 20px;
                font-size: 15px;
                list-style: none;
                float: left;
                a{
                    color: rgba(0,0,0,0.3);
                    border-right: 1px solid rgba(0,0,0,0.3);
                    padding:0 10px;
                    &:last-child{
                        border-right: none
                    }
                }

            }
        }
    }
</style>