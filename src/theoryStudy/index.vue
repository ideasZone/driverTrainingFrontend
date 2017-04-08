<style lang="scss" scoped>
    @import '../css/main';
    #theoryStudy{
        div.header{
            height:10rem;
        }
        div.content{
            section{
                height:30rem;
                div.contentItem{
                    display:flex;
                    height:25rem;
                    & > div.flex1{
                        flex:1;
                        border:1px solid;   
                    }
                }
                border:1px solid #CCC;
            }
        }
        div.footer{
            height:10rem;
        }
    }
</style>

<template>
    <div id='theoryStudy'>
       <div class='header'>
            这里放些内容
       </div>
       <div class='content'>
            <section>
                <p>科目一理论和视频</p>
                <div class='contentItem'>
                    <div class='flex1'>视频</div>
                    <div class='flex1'>视频</div>
                    <div class='flex1'>视频</div>
                    <div class='flex1'>视频</div>
                </div>
            </section>
            <section>
                <p>科目二理论和视频</p>
                <div class='contentItem'>
                    <div class='flex1'>视频</div>
                    <div class='flex1'>视频</div>
                    <div class='flex1'>视频</div>
                    <div class='flex1'>视频</div>
                </div>
            </section>
            <section>
                <p>科目三理论和视频</p>
                <div class='contentItem'>
                    <div class='flex1'>视频</div>
                    <div class='flex1'>视频</div>
                    <div class='flex1'>视频</div>
                    <div class='flex1'>视频</div>
                </div>
            </section>
            <section>
                <p>科目四理论和视频</p>
                <div class='contentItem'>
                    <div class='flex1'>视频</div>
                    <div class='flex1'>视频</div>
                    <div class='flex1'>视频</div>
                    <div class='flex1'>视频</div>
                </div>
            </section>
       </div>
       <div class='footer'>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        methods:{

        }
    }
</script>
