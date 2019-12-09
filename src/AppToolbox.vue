<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component({name: 'AppToolbox'})
  export default class AppToolbox extends Vue {

  };
</script>
<template>
    <div class="app-toolbar container-box">
        Toolbar
    </div>
</template>
<style lang="scss" scoped>
    .app-toolbar {
        max-width: 100px;
    }
</style>
