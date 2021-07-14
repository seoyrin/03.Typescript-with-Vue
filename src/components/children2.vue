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

            /* 
            cf)$emit 
                 emit은 다른 컴포넌트에게 이벤트를 전달하기 위해 사용할 수 있다. 
                 예를 들어 자식 컴포넌트에서 
                 사용자지정 이벤트를 만들어 부모 컴포넌트에게 전달할 수 있다. 
                 부모 컴포넌트는 자식 컴포넌트에서 
                 만들어진 사용자지정 이벤트를 받아(v-on) 특정 동작을 수행할 수 있다.
            */
        }
    }
</script>
