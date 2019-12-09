<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component({name: 'AppPanels'})
  export default class AppPanels extends Vue {

  };
</script>
<template>
    <div class="app-panels container-box">
        Panels
    </div>
</template>
<style lang="scss" scoped>
    .app-panels {
        min-width: 240px;
    }
</style>
