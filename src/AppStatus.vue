<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component({name: 'app-status'})
  export default class AppStatus extends Vue {

  };
</script>
<template>
    <div class="app-status container-box">
        Status
    </div>
</template>
<style lang="scss" scopped>
    @import "theme";

    .app-status {
        grid-area: status;
    }
</style>
