<template>
    <div class="w">
        <div><v-top></v-top></div>
        <div><v-header></v-header></div>
        <div class="content-box">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import vTop from './Top.vue'
import vHeader from './Header.vue'
export default {
    data(){
        return{

        }

    },
    components: {
        vTop,vHeader
    },
    
}
</script>
<style>
* {
    margin: 0px;
    padding: 0px;
    
}
</style>