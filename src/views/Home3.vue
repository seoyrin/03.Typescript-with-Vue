<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 5.@Provide / @inject로 데이터 전달하기    -->
    <children></children>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import children from '@/components/children3.vue';

@Component({
  components: {
    children,
  },
})
export default class Home extends Vue {
  @Provide('message') msg: string = 'provide/inject example';
  // 자식 컴포넌트에서 가져온 프로퍼티명(message)와 
  // 여기(부모컴포넌트)에서 정의한 프로퍼티명(msg)가 다를 경우엔, 
  // @Provide('자식 컴포넌트에서 가져온 프로퍼티명')을 명시해줘야 한다.
  // cf)부모와 자식의 프로퍼티명이 같으면 @Provide <--명시하지 않아도 된다.
}
</script>
