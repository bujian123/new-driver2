<template>
    <div>
        12415
        <footShow :title=this.title :showData=this.showData style="margin-top:10px;"></footShow>
    </div>   
</template>

<script>
    export default {
        data() {
            return {
                title: '哈哈哈',
                showData: [{
                    lable: '124',
                    href: "12235"
                }, {
                    lable: '124',
                    href: "12235"
                }, {
                    lable: '124',
                    href: "12235"
                }, {
                    lable: '124',
                    href: "12235"
                }],
            }
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>