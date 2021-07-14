<template>
    <input type="checkbox" :checked="checked" @change="change">
</template>

<script lang="ts">
import {Vue, Component, Model, Emit} from  'vue-property-decorator';

@Component
export default class MyCheckbox extends Vue {
    @Model('change', {type: Boolean}) readonly checked!: boolean;
    // change는 이벤트명, 타입은 boolean

    @Emit() 
    change(event: Event) {
        return event.target.checked;
    }

}
</script>

<style scoped>

</style>