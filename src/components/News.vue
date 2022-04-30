<template>
  <div>
    <div >
    <div class="button">
      <span @click="show(1)" :class="index===1? 'active':''" class="titleone">乡村振兴</span>
      <span class="center">|</span>
      <span @click="show(2)" :class="index===2? 'active':''"  class="titletwo">最后一公里</span>
    </div>
     <div class="search_two">
     <el-input
        placeholder="请输入内容"
        v-model="input"
        width="200px">
    </el-input>
    <el-button type="primary" @click="onSubmit">搜索</el-button>
    
  </div>
    </div>
    <div class="one" v-show="index===1 && isShow">
      <div class="news">
        <el-table
      :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 1200px">
      <el-table-column
        prop="name"
        width="1000">
         <template slot-scope="scope">
           <a :href="scope.row.address" target="_blank" >{{scope.row.name}}</a>
        </template>
      </el-table-column>

      <el-table-column
        prop="date"
        width="200">
      </el-table-column>
        </el-table>
      </div>
      <div class="bolck">
        <el-pagination
          layout=" pager"
          @current-change="currentChange"
          :total="50">
        </el-pagination>
      </div>

    </div>
    <div class="two" v-show="index===2 && isShow">
      <div class="news">
        <el-table
      :data="lists.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 1600px">
      <el-table-column
        prop="name"
        width="1000">
         <template slot-scope="scope">
           <a :href="scope.row.address" target="_blank" >{{scope.row.name}}</a>
        </template>
      </el-table-column>

      <el-table-column
        prop="date"
        width="200">
      </el-table-column>
        </el-table>
      </div>
      <div class="bolck">
        <el-pagination
          layout=" pager"
          @current-change="currentChange"
          :total="50">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { list } from '../static/news_one'
import {lists} from '../static/news_two'
export default {
  data () {
    return {
      // 控制切换按钮后按钮改变样式
      index: 1,
      // 控制点击按钮后子组件显示，再次点击隐藏
      isShow: true,
      list,
      lists,
      currentPage:1,
      currentPageTwo:1,
      pagesize:5,
    }
  },
  methods: {
    show (value) {
      this.index === value ? this.isShow = !this.isShow : this.isShow = true
      this.index = value
    },
    currentChange(val){
          this.currentPage =val;
    },
  }
}
</script>
<style>
a {
  text-decoration: none;
  color: black;
  font: 400;
  
}
.el-table {
  margin-left: 8%;
}
.bolck {
  margin-top:100px;
  margin-left: 660px;
}
.center {
  font-size: 22px;
  color: rgb(187, 187, 202);
  margin-left: 20px;
  margin-right: 20px;
}
span.titleone {
  font-size: 22px;
  color: rgb(187, 187, 202);
}
span.titletwo {
  font-size: 22px;
  color: rgb(187, 187, 202);
}
span.titleone.active {
  font-size: 22px;
  color: black;
}
span.titletwo.active {
  font-size: 22px;
  color: black;
}
div.button {
  margin-left:10%;
  margin-top: 50px;
  display:inline-block;
}
div.search_two {
  float: right;
  margin-top: 40px;
  margin-right: 10%;
}
.el-table .el-table__cell {
  padding: 16px 0;
}
</style>