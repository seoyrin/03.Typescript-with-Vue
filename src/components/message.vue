<template>
    <!-- template 안에는 하나의 태그로 감싸줘야 한다. -->
    <div>
        <input type="text" v-model="message">
        <div> {{message}} </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    // 클래스의 인스턴스를 컴포넌트의 인스턴스로 사용하기 위해 @Component
    // 클래스 선언
    export default class Message extends Vue {
        // 멤버변수
        message: string = '메시지를 입력해주세요';
    }
</script>