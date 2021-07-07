<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 4.@Emit 으로 이벤트 전달하기   -->
    <children @counter="counter"></children>
    <!-- 이벤트 넘기는 방법 2가지
        v-on:name=""
        @이벤트이름="핸들러명" -->
    <p>
        부모에서 숫자를 보여줍니다. : {{count}}
    </p>
    <hr>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import children from '@/components/children2.vue';

@Component({
  components: {
    children,
  },
})
export default class Home extends Vue {
  count: number = 0;

  // 위의 핸들러명과 동일한 이름의 함수를 생성 
  counter() {
      this.count++;
  }
}
</script>
