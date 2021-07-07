<template>
    <div>
        <button @click="counter">자식에서 숫자를 증가시킵니다.</button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch, Emit} from 'vue-property-decorator';

    @Component
    export default class Children extends Vue {
        @Emit()
        counter() { // 함수명이 부모의 핸들러명과 동일하기 때문에 @Emit(여기서 파라미터를 넘기지 않아도 된다.)
            // 해당 함수 자체를 부모에서 실행해주기 때문에 구현부는 없어도 된다.
            // 이곳이 실행되는지 보기 위해, console.log 찍어보기 
            console.log('children2.vue의 counter() >>> : ');
        }
    }
</script>