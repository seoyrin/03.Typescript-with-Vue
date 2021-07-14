<template>
    <div class="card">
        <div class="card-header" @click="toggle">
            Featured
        </div>
        <div class="card-body" v-show="show">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Mixins} from 'vue-property-decorator';
// Mixins : 다중 상속 가능 
import toggle from  './toggle.vue';

@Component ({
    components: {
        toggle,
    }
})
export default class ToggleBtn extends Mixins(toggle) { // Mixing(import한 공통컴포넌트명)★
    // accordion.vue와 dropdown.vue에 공통으로 들어가는 부분 -> 믹스인을 사용해서 리팩토링 가능 
    // public show: boolean = false;
    // public toggle() {
    //     this.show = !this.show;
    // }
    mounted() {
        /*
        el이 새로 생성된 vm.$el로 대체된 인스턴스가 마운트 된 직후 호출됩니다.
        루트 인스턴스가 문서 내의 엘리먼트에 마운트 되어 있으면, 
        mounted가 호출 될 때 vm.$el도 문서 안에 있게 됩니다.
        */
        console.log(this)
    }
}
</script>
<style>
    .card{
        width: 500px;
        margin: 10px;
    }
</style>
