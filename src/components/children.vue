<template>
    <div>
        <p>
            {{alertMessage}}
        </p>
        {{parentMessage}}
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

    @Component
    export default class Children extends Vue {
        @Prop() parentMessage?: string;

        alertMessage: string = '';
        @Watch('parentMessage') // parentMessage 변수를 감시할 것을 명시
        // Watch(감시할 속성명, 옵션들: immediate, deep)
        update(value: string, oldValue: string) { // pudate라는 핸들러 등록
            // update(해당속성의 현재값, 변경되기 전의 값)
            this.alertMessage = '메시지를 업데이트 했습니다.';
        }

    }
</script>