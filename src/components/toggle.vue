<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component
    export default class Toggle extends Vue {
        // accordion.vue와 dropdown.vue에 공통으로 들어가는 부분 -> 믹스인을 사용해서 리팩토링 가능 
        // -> toggle.vue 를 만들어 공통으로 들어가는 부분이 들어있는 컴포넌트생성
        public show: boolean = false;
        public toggle() {
        this.show = !this.show;
    }
    }
</script>

<style scoped>

</style>