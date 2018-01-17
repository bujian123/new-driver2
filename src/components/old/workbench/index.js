import workComponent from './workComponent.vue'
const  workbench = {
    install:function(Vue){
        Vue.component('workbench',workComponent);
    }
}
export default workbench