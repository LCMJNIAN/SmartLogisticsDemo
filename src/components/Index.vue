<template>
    <div class="index">
        <div class="all">
        <!-- 轮播图（未加连接） -->
        <el-carousel height="400px">
            <el-carousel-item v-for="item in imgArray" :key="item" >
                <a :href="item.href" target="_blank"><img :src="item.url" class="rightImg" ></a>
            </el-carousel-item>
        </el-carousel>
        <div class="job">
            <p class="title">岗位招聘</p>
            <span ><a href="http://localhost:8081/#/job" class="more">More</a></span>
            <div>
                <span><a href="https://jobs.51job.com/hefei-gxq/137731079.html?s=sou_sou_soulb&t=0_0" target="_blank" class="small">&nbsp;>&nbsp;上海修武工业技术有限公司（物流专员）</a></span><span class="date">2022-01-28</span>
                <span><a href="https://jobs.51job.com/shanghai-ptq/131167421.html?s=sou_sou_soulb&t=0_1" target="_blank" class="small">&nbsp;>&nbsp;上海斑马来拉物流科技有限公司（合同物流销售）</a></span><span class="date">2022-01-28</span>
                <span><a href="https://jobs.51job.com/wuhu-jjq/137722936.html?s=sou_sou_soulb&t=0_0" target="_blank" class="small">&nbsp;>&nbsp;奇瑞汽车股份有限公司（仓储物流高级经理）</a></span><span class="date">2022-01-28</span>
                <span><a href="https://jobs.51job.com/huaibei/137716714.html?s=sou_sou_soulb&t=0_0" target="_blank" class="small">&nbsp;>&nbsp;合肥安为康医学检验有限公司（物流专员）</a></span><span class="date">2022-01-28</span>
                <span><a href="https://jobs.51job.com/fuyang/136454860.html?s=sou_sou_soulb&t=0_0" target="_blank" class="small">&nbsp;>&nbsp;安徽颍上牧原农牧有限公司（物流管理员）</a></span><span class="date">2022-01-28</span>
                <span><a href="https://jobs.51job.com/wuhu/131242937.html?s=sou_sou_soulb&t=0_0" target="_blank" class="small">&nbsp;>&nbsp;芜湖中能机械制造有限公司（物流主管）</a></span><span class="date">2022-01-28</span>
                <span><a href="https://jobs.51job.com/hefei/129954457.html?s=sou_sou_soulb&t=0_0" target="_blank" class="small">&nbsp;>&nbsp;安徽尚德科技有限公司（物流专员/调度）</a></span><span class="date">2022-01-28</span>
                <span><a href="https://jobs.51job.com/wuhu/109831488.html?s=sou_sou_soulb&t=0_0" target="_blank" class="small">&nbsp;>&nbsp;芜湖通和汽车管路系统有限公司（物流发货员）</a></span><span class="date">2022-01-28</span>
            </div>
        </div>
        <div class="news_one">
            <p class="title">乡村振兴</p>
            <span ><a href="http://localhost:8081/#/news" class="more">More</a></span>
            <div>
                <span><a href="https://www.my399.com/p/62169.html" target="_blank" class="small">&nbsp;>&nbsp;2022年全国脱贫人口稳岗就业举措出台</a></span><span class="date">2022-01-19</span>
                <span><a href="https://www.my399.com/p/62155.html" target="_blank" class="small">&nbsp;>&nbsp;[贯彻落实六中全会精神]集体有“活钱” 群众事好办</a></span><span class="date">2022-01-19</span>
                <span><a href="https://www.my399.com/p/62150.html" target="_blank" class="small">&nbsp;>&nbsp;[巩固拓展脱贫攻坚成果]全域旅游助老区人民脱贫不返贫</a></span><span class="date">2022-01-19</span>
                <span><a href="https://www.my399.com/p/62139.html" target="_blank" class="small">&nbsp;>&nbsp;大秧歌搅热农家院 彩色雪雕扮靓小村庄&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></span><span class="date">2022-01-19</span>
                <span><a href="https://www.my399.com/p/61804.html" target="_blank" class="small">&nbsp;>&nbsp;新春走基层丨橘香 橘乡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></span><span class="date">2022-01-19</span>
                <span><a href="https://www.my399.com/p/61801.html" target="_blank" class="small">&nbsp;>&nbsp;有了政策支持，俺家现在也是有房有车了</a></span><span class="date">2022-01-18</span>
                <span><a href="https://www.my399.com/p/61789.html" target="_blank" class="small">&nbsp;>&nbsp;写在十九届中央纪委六次全会召开之际 坚持全面从严治党 ...</a></span><span class="date">2022-01-18</span>
                <span><a href="https://www.my399.com/p/61725.html" target="_blank" class="small">&nbsp;>&nbsp;黑龙江出台深化农业技术人员职称制度改革实施方案</a></span><span class="date">2022-01-18</span>
            </div>
        </div>
        <div class="news_two">
            <p class="title">最后一公里</p>
            <span ><a href="http://localhost:8081/#/news" class="more">More</a></span>
            <div>
                <span><a href="http://zj.people.com.cn/n2/2022/0124/c186327-35109244.html" target="_blank" class="small">&nbsp;>&nbsp;宁波慈溪着力打通科技服务“最后一公里</a></span><span class="date">2022-01-24</span>
                <span><a href="http://finance.people.com.cn/n1/2022/0124/c1004-32338672.html" target="_blank" class="small">&nbsp;>&nbsp;国家发改委：“十四五”时期将从四方面重点推进现代物流发展</a></span><span class="date">2022-01-24</span>
                <span><a href="http://gz.people.com.cn/n2/2022/0123/c403695-35108521.html" target="_blank" class="small">&nbsp;>&nbsp;人大代表韦炫章：畅通农村产业物流运输“最后一公里”</a></span><span class="date">2022-01-23</span>
                <span><a href="http://jx.people.com.cn/n2/2022/0123/c186330-35108179.html" target="_blank" class="small">&nbsp;>&nbsp;去年社会物流总额预计超300万亿元</a></span><span class="date">2022-01-23</span>
                <span><a href="http://hn.people.com.cn/n2/2022/0123/c195194-35108487.html" target="_blank" class="small">&nbsp;>&nbsp;湖南发布A级物流企业市州排行榜</a></span><span class="date">2022-01-23</span>
                <span><a href="http://yn.people.com.cn/n2/2022/0123/c378440-35108240.html" target="_blank" class="small">&nbsp;>&nbsp;2021年社会物流总额预计超300万亿元</a></span><span class="date">2022-01-23</span>
                <span><a href="http://finance.people.com.cn/n1/2022/0122/c1004-32337168.html" target="_blank" class="small">&nbsp;>&nbsp;2021年社会物流总额预计在300万亿元以上</a></span><span class="date">2022-01-22</span>
                <span><a href="http://bbs1.people.com.cn/post/1/1/2/177655347.html" target="_blank" class="small">&nbsp;>&nbsp;广州上线家政地图 打通家政服务“最后一公里</a></span><span class="date">2022-01-22</span>
            </div>
        </div>
        </div>
        <div class="bottom">
            <span class="bottom_img"><a href="https://www.njupt.edu.cn"><img src="../assets/Bottom_one.png" alt="南京邮电大学" width="300px" height="70px"></a></span>
            <span class="bottom_img"><a href="http://www.spb.gov.cn/"><img src="../assets/Bottom_two.png" alt="国家邮政局" width="300px" height="70px"></a></span>
            <span class="bottom_img"><a href="http://simp.njupt.edu.cn/"><img src="../assets/Bottom_three.png" alt="南京邮电大学现代邮政学院" width="300px" height="70px"></a></span>
            <span class="bottom_img"><a href="http://cnxczx.net/"><img src="../assets/Bottom_forth.png" alt="乡村振兴网" width="300px" height="70px"></a></span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            imgArray: [
                {url: require('../assets/1.png'), href: "http://www.gov.cn/zhengce/2021-08/23/content_5632881.htm"},
                {url: require('../assets/2.png'), href: "http://www.gov.cn/zhengce/2021-02/21/content_5588098.htm"},
                {url: require('../assets/3.png'), href: "http://www.gov.cn/xinwen/2022-03/21/content_5680152.htm"}
            ]
        }
    },

}
</script>

<style>
.bottom {
    float: left;
    margin-left: 10.3%;
}
.rightImg {
  width: 100%;
  height: 400px;
}
.el-carousel{
    width: 41.25%;
    height: 400px;
    margin-left: 8.25%;
    float: left;
    background-color: gainsboro;
    padding: auto;
    margin-top: 40px;
    border-radius:20px;
    box-shadow:0 15px 35px rgba(0,0,0,0.1);
    
}
.job{
    margin-top: 40px;
    margin-left: 20px;
    width: 41.25%;
    height: 400px;
    float: left;
    background-color: white;
    border-radius:20px;
    box-shadow:0 15px 35px rgba(0,0,0,0.1);
}
.news_one {
    width: 41.25%;
    height: 380px;
    float: left;
    margin-left: 8.25%;
    margin-bottom: 100px;
    background-color: white;
    margin-top: 20px;
    border-radius:20px;
    box-shadow:0 15px 35px rgba(0,0,0,0.1);
}
.news_two {
    width: 41.25%;
    height: 380px;
    margin-top: 20px;
    float: left;
    margin-left: 20px;
    background-color: white;
    border-radius:20px;
    box-shadow:0 15px 35px rgba(0,0,0,0.1);
}
* {
    margin: 0;
    padding: 0;
}
a {
  text-decoration: none;
  color: black;
  font-size: 16px;
  font: 400;
  
}
.more {
    float: right;
    color: rgb(187, 187, 187);
    margin-right: 10px;
    margin-top: 5px;
}
.small {
    float: left;
    margin-top:20px;
}
.date {
    float: right;
    margin-right: 10px;
    padding-right: 0px;
    font-size: 16px;
    font: 400;
    margin-top:20px;
}

.title {
    font-size: 22px;
    color: #081562;
    margin-top: 10px;
    margin-left: 20px;
    padding-top: 5px;
    display: inline-block;
}

.all {
    background-color: white;
}
img {
	image-rendering:-moz-crisp-edges;
	image-rendering:-o-crisp-edges;
	image-rendering:-webkit-optimize-contrast;
	image-rendering: crisp-edges;
	-ms-interpolation-mode:nearest-neighbor;
}
</style>
