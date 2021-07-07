<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 1.@Component로 컴포넌트 만들기  -->
    <message></message>
    <hr />

    <!-- 2.@Prop으로 데이터 전달하기  -->
    <children :parentMessage="message"></children>
    <!-- 엘리먼트 :<--콜론을 붙여주면 "표현식" 으로 가능 -->
    <!-- parentMessage는 children컴포넌트에서 정의한 변수 / 동적변수 message -->
    <hr />

    <!-- 3.@Watch로 데이터 변화 감지하기  -->
    <button @click="changeMessage">메시지를 바꿔줄게요.</button>
    <hr>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import message from '@/components/message.vue';
import children from '@/components/children.vue';

@Component({
  components: {
    message,
    children,
  },
})
export default class Home extends Vue {
  message: string = 'hello world'; // 동정변수로 property로 넘길 수 있다.

  changeMessage() {
    this.message = 'change';
  }
}
</script>
