<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="rgb(228, 143, 137)"
            text-color="#fff" active-text-color="#FFCC99" mode="horizontal" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>
<script>
export default {
    data() {
        return {
            collapse: false,
            items:[
                {
                    title:'首页',
                    index:'index',
                },
                {
                    title:'岗位招聘',
                    index:'job',
                },
                {
                    title:'新闻传递',
                    index:'news',
                },
                {
                    title:'联系我们',
                    index:'aboutus',
                },
                {
                    title:'个人中心',
                    index:'center',
                }
            ]
        }
    }
}
</script>
<style scoped>
.el-menu-item {
    margin-left: 7.5%;
    font-size: 20px;
}
.header {
    position: static;
}
.el-menu-item.is-active{
    border-bottom:0px;
}
</style>
