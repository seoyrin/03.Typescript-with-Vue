<template>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle"
                @click="toggle"
                type="button" id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
            Dropdown button
        </button>
        <div class="dropdown-menu show" v-show="show" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
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

export default class Dropdown extends Mixins(toggle) { // Mixing(import한 공통컴포넌트명)★
    // accordion.vue와 dropdown.vue에 공통으로 들어가는 부분 -> 믹스인을 사용해서 리팩토링 가능 
    // public show: boolean = false;
    // public toggle() {
    //     this.show = !this.show;
    // }
}
</script>

<style>
    .dropdown{
        width: 500px;
    }
</style>