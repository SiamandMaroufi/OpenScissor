<script lang="ts">
  import { Component } from 'vue-property-decorator';
  import Vue from 'vue';

  @Component
  export default class Paper extends Vue{

  };
</script>
<template>
    <div class="paper"></div>
</template>
<style lang="scss" scoped>
    .paper {
        display: block;
        background: white;
        width: 640px;
        height: 480px;
        box-shadow: 4px 4px 1px rgba(0, 0, 0, .4);
    }
</style>
