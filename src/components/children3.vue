<template>
    <div>
        {{message}}
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch, Emit, Inject} from 'vue-property-decorator';

    @Component
    export default class Children extends Vue {
        // message(Inject)값은 부모에서 받아서 쓰는 값이기 때문에 초기화 하면 X
        @Inject() readonly message!: string; // 변수! <--해당변수가 의도적으로 초기화되지 않음을 알려주기 때문에 오류로 보지 않는다. 
                                             // 또는 변수? <-- 해당변수 사용을 옵션으로 설정
        // message(Inject)값은 부모에서 받아서 쓰는 값이기 때문에 변경되면 안된다. -> readonly 제한자 추가 
        // =>자식컴포넌트에서 Inject로 메시지를 받게 설정 완료 
    }
</script>