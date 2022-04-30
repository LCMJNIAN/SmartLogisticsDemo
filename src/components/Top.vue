<template>
    <div class="top">
        <div class="logo"><span class="name">智邮</span><img src="../assets/zhiyou.png" width="100px"></div>
        <span >小程序<img src="../assets/Top-two.png" class="right"></span>
    </div>
</template>
<style scoped>
.top {
    position: static;
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    font-size: 22px;
    background-color: #fff;
}
.logo {
    float: left;
    font: 800;
    font-size: 30px;
    padding: auto;
    padding-left: 10%;
    padding-top: 20px;
}
.right {
    position: absolute;   
    left: 86%;   
    top: 1.8%;

}


span {
    color: rgb(223, 173, 175);
    float: right;
    margin-right: 15%;
    margin-top: 2.5%;
}
* {
    margin: 0px;
    padding: 0px;
}
.name {
    padding-bottom: 20px;
    float: left;
    margin-right: 20px;
    font-size:40px;
    font-family:"微软雅黑", "宋体", "黑体", Arial;
    color: rgb(223, 173, 175);
}

</style>