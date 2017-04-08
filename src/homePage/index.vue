<style lang="scss" scoped>
    @import '../css/main';
    #homePage{
        height: 100%;
        width:100%;
        div.top{
            font-size: 13px;
            height: 35px;
            line-height: 35px;
            background:#f5f5f5;
            border-bottom:3px solid #1dacf9;
            
            div{
                display:inline-block;
            }
            div.left{
                position: relative;
                left: 20rem;   
                span{
                    margin-right: 5px;
                }             
            }
            div.right{
                position: relative;
                right: 20rem;
                float: right;
                span{
                    vertical-align: middle;
                }
                span.split{
                    margin-right: 10px;
                    margin-left: 10px;
                    background: #dedede;
                }
            }
        }

        div.header{
            height: 70px;
            margin-top: 25px;
            border: 1px solid #e6e6e6;
            text-align: center;
            background: #eef1f6;
            ul{
                vertical-align: middle;
                display:inline-block;
                margin:5px auto;
            }
            .el-menu-item,
            .el-submenu{
                margin-right: 4rem;
            }
            div.search{
                position: relative;
                display:inline-block;
                width: 150px;
                input{
                    height:25px;
                    width:150px;
                }
                span{
                    position: absolute;
                    right: 5px;
                }
            }
        }
        div.carousel{
            height: 380px;
            .el-carousel__item h3 {
                color: #475669;
                font-size: 14px;
                opacity: 0.75;
                line-height: 150px;
                margin: 0;
            }

            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }
            
            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
            .el-carousel{
                height: 100%;
            }
        }
        div.showArea{
            display: flex;
            div{
                height:20rem;
                flex:1;
            }
            div.schoolArea{
                background: #dfe6ec;
            }
            div.teacherArea{
                background: #d3dce6
            }
            div.studentArea{
                background: #e6e6e6;
            }
        }
        .location_icon,.search_icon{
            display:inline-block;
            height:18px;
            width:16px;
            top: 4px;
            position: relative;
            background-size: cover;
        }
        span.location_icon{
            background: url('../img/location.png') no-repeat center center;
        }
        span.search_icon{
            background: url('../img/search.png') no-repeat center center;
        }

        .el-dialog__wrapper{
             .el-dialog__body{
                 padding-top:0;
             }
        }
        div.showCity{
            span{
                display:inline-block;
                width:3rem;
            }
        }
     }
</style>

<template>
    <div id='homePage'>
        <!--<router-view></router-view>    -->
        <div class="top">
            <div class='left'>
                <span class='location_icon'></span>
                <span class='lightBlue'>{{city}}</span>
                <span @click='switchCity'>[切换]</span>
            </div>
            <div class='right'>
                <span @click="dialogTableVisible = true">登录</span>
                <span class='split'></span>
                <span>注册</span>
            </div>
        </div>  
        <div class='header'>
            <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="homePage">首页</el-menu-item>
                <el-menu-item index="theoryStudy">理论学习</el-menu-item>
                <el-submenu index="mockExam">
                    <template slot="title">模拟考试</template>
                    <el-menu-item index="examObjectOne">科目一</el-menu-item>
                    <el-menu-item index="examObjectTwo">科目二</el-menu-item>
                    <el-menu-item index="examObjectThree">科目三</el-menu-item>
                    <el-menu-item index="examObjectFour">科目四</el-menu-item>
                </el-submenu>
                <el-menu-item index="examRegistration">考试报名</el-menu-item>
                <el-submenu index="searchSchool">
                    <template slot="title">找驾校</template>
                    <el-menu-item index="closest">离我最近</el-menu-item>
                    <el-menu-item index="highestScore">好评优先</el-menu-item>
                </el-submenu>
                <el-menu-item index="searchCoach">找教练</el-menu-item>
                <el-menu-item index="toBeCoach">我要当教练</el-menu-item>
                <el-menu-item index="feedback">反馈</el-menu-item>
            </el-menu>
            <div class='search'>
                <el-input
                    placeholder="请输入搜索内容"
                    icon="search"
                    v-model="input2"
                    :on-icon-click="handleIconClick">
                </el-input>
            </div>
        </div>
        <div class="block carousel">
            <el-carousel height="100%">
            <el-carousel-item v-for="item in 4">
                <h3>{{ item }}</h3>
            </el-carousel-item>
            </el-carousel>
        </div>
        <div class="showArea">
            <div class='schoolArea'>
                驾校区
            </div>
            <div class='teacherArea'>
                教练区
            </div>
            <div class='studentArea'>
                学员区
            </div>
        </div>
        <!-- Table -->
        <el-dialog v-model="dialogTableVisible" size='tiny'>
              <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="学员登录" name="first">
                    <div>
                        <el-input
                            placeholder="请输姓名"
                            icon="search"
                            v-model="inputName"
                            :on-icon-click="handleIconClick">
                        </el-input>
                        <el-input
                            placeholder="请输入身份证号"
                            icon="search"
                            v-model="inputID"
                            :on-icon-click="handleIconClick">
                        </el-input>
                        <el-input
                            placeholder="请输入手机号"
                            icon="search"
                            v-model="inputCellNumber"
                            :on-icon-click="handleIconClick">
                        </el-input>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="驾校登陆" name="second">驾校登陆</el-tab-pane>
                <el-tab-pane label="教练登陆" name="third">教练登陆</el-tab-pane>
            </el-tabs>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                city:'全国',
                activeIndex: '1',
                activeIndex2: '1',
                dialogTableVisible: false,
                activeName: 'second',
                inputName:'',
                inputID:'',
                inputCellNumber:''
            }
        },
        methods:{
            switchCity(){

            },
            handleSelect(key, keyPath) {
                var path = keyPath[0];
                var ret = '';
                switch(path){
                    case 'homePage':
                    case 'feedback':
                    case 'searchSchool':
                    case 'toBeCoach':
                    case 'examRegistration':
                    case 'theoryStudy':
                        ret = path;
                        break;
                    case 'mockExam':
                    case 'searchCoach':
                        ret = path +'/'+ key;
                        break;
                }
                this.$router.push(`/${ret}`)
            },
            handleClick(tab, event) {
                console.log('handleClickhandleClick');
                console.log(tab, event);
            },
            handleIconClick(){

            }
        },
        components:{

        },
        created(){

        },
        destroy(){
        },
        mounted(){

        }
    }
</script>
