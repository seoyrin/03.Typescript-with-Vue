<template>
    <div>
        <h1>약관</h1>
        <p>
            이곳에는 동의를 필요하는 어떠한 약관 내용이 들어갑니다.
        </p>
        <my-checkbox v-model="checked" @change="change"></my-checkbox>
        {{text}}
    </div>
</template>

<script lang="ts">
import {Component, Vue} from  'vue-property-decorator';
import myCheckbox from '@/components/my-checkbox.vue';

@Component({
    components: {
        myCheckbox,
    }
})
export default class Home extends Vue {
    checked: boolean = false;
    text: string = '동의하지 않습니다.';

    change(checked: boolean) {
        this.checked = checked;
        this.text = checked ? '동의합니다.' : '동의하지 않습니다.';
    }
}
</script>
