<template>

    <div style="display:flex;display:-webkit-flex;font-size: 13px; padding: 20px 10px;border: 1px solid #ccc">
        <div style="width:200px;color:#958177;font-weight:bold">{{title}}</div>
        <div style="flex-grow: 1">
            <ul style="display: flex; flex-wrap: wrap;justify-content:space-around">
                <li v-for='(item,index) in showData' style="width:19%;color:#578bcf">
                    <a :href=item.href>{{item.lable}}</a>
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'footShow',
        data() {
            return {}
        },
        props: ['title', 'showData'],

    }
</script>
<style scoped>

</style>