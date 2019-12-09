<template>
    <div id="app">
        <app-header class="header"/>
        <div class="content">
            <app-toolbox/>
            <app-workspace/>
            <app-panels/>
        </div>
        <app-status class="footer"/>
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import AppHeader from '@/AppHeader.vue';
  import AppToolbox from '@/AppToolbox.vue';
  import AppWorkspace from '@/AppWorkspace.vue';
  import AppPanels from '@/AppPanels.vue';
  import AppStatus from '@/AppStatus.vue';

  @Component({
    name: 'OpenScissor',
    components: {AppStatus, AppPanels, AppWorkspace, AppToolbox, AppHeader}
  })
  export default class App extends Vue {

  }
</script>
<style lang="scss" scopped>
    #app {
        display: flex;
        flex-direction: column;
        width: 100%;
        > .content {
            flex:1;
            display: flex;
        }
    }
</style>
