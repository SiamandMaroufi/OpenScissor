<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component({name: 'AppHeader'})
  export default class AppHeader extends Vue {

  };
</script>
<template>
    <div class="app-header container-box">
        Header
    </div>
</template>
<style lang="scss" scoped>
    @import "theme";

    .app-header {
        display: flex;
        align-items: center;
        align-content: center;
        min-height: 30px;
    }
</style>
