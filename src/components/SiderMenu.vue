<template>
    <Menu theme="dark" class="page-menu" width="100%">
        <Submenu  v-for="item in menu" :key="item.name" :name="item.path || item.name">
            <template slot="title">
                <router-link class="link" :to="item.path" v-if="item.path" >{{item.name}}</router-link>
               <template v-else>{{item.name}}</template>
            </template>
            <MenuItem v-for="sbitem in item.submenu" :key="sbitem.path" :name="sbitem.path" :to="sbitem.path">
                <router-link  class="link" :to="sbitem.path">{{sbitem.name}}</router-link>
            </MenuItem>
        </Submenu>
    </Menu>
</template>
<script>
    import {menu} from 'util/const.js'
    export  default {
        data(){
          return {
             menu: menu
        }},
        name:"SiderMenu"
    }
</script>
<style lang="less">
    .link{
        color: white;
        display: block;
        height: 100%;
        width: 100%;
        &:hover{
            color: rgba(255,255,255,0.7);
        }
    }
</style>