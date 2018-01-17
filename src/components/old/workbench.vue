<template>
  <div>
    <workbench :workData=workData></workbench>
    <workbench :workData=workData2 style="margin:0.2rem 0"></workbench>
    <workbench :workData=workData3 ></workbench>
    <workbench :workData=workData4 style="margin-top:0.2rem;"></workbench>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                // title: '信息管理',
                workData: {
                    title: '信息管理',
                    child: [{
                        text: '校区管理',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/01@2x.png')
                    }, {
                        text: '班级管理',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/02@2x.png')
                    }, {
                        text: '教室管理',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/03@2x.png')
                    }, {
                        text: '教师管理',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/04@2x.png')
                    }, {
                        text: '课程管理',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/05@2x.png')
                    }, {
                        text: '缴费提醒',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/06@2x.png')
                    }, {
                        text: '健康管理',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/07@2x.png')
                    }]
                },
                workData2: {
                    title: '日常管理',
                    child: [{
                        text: '午托点名',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/08@2x.png')
                    }, {
                        text: '晚托点名',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/09@2x.png')
                    }, {
                        text: '课程点名',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/10@2x.png')
                    }, {
                        text: '食谱记录',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/11@2x.png')
                    }, {
                        text: '作业点评',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/12@2x.png')
                    }, {
                        text: '食谱记录',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/13@2x.png')
                    }]
                },
                workData3: {
                    title: '统计分析',
                    child: [{
                        text: '到校情况',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/14@2x.png')
                    }, {
                        text: '学生表现',
                        href: '/xqgl',
                        imgSrc:require( '../../static/images/gzt/15@2x.png')
                    }, ]
                },
                workData4: {
                    title: '综合管理',
                    child: [{
                        text: '安全定位',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/16@2x.png')
                    }, {
                        text: '视频监控',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/17@2x.png')
                    }, {
                        text: '积分管理',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/18@2x.png')
                    }, {
                        text: '商城',
                        href: '/xqgl',
                        imgSrc: require('../../static/images/gzt/19@2x.png')
                    }]
                }
            }
        }
    }
</script>
<style>
    .workContainer {
        padding-bottom: 0.1rem;
    }
</style>