<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import DocumentsIndicators from '@/DocumentsIndicators.vue';
  import { ScissorDocument, New, Changed, Saved } from '@/models/ScissorDocument';
  import Paper from '@/Paper.vue';


  @Component({
    name: 'AppWorkspace',
    components: {Paper, DocumentsIndicators}
  })
  export default class AppWorkspace extends Vue {
    activeIndex = 0;
    documents: ScissorDocument[] = [
      {name: 'untitled', state: New},
      {name: 'portrait.scd', state: Changed},
      {name: 'logo.scd', state: Saved}
    ];

    get activeDocument() {
      return this.documents[this.activeIndex];
    }
  };
</script>
<template>
    <div class="app-workspace container">
        <div class="documents-header container-box" v-if="documents && documents.length">
            <documents-indicators :document="document"
                                  :active="activeIndex === index"
                                  v-for="(document, index) in documents" :key="index"/>
        </div>
        <div class="active-document container">
            <paper />
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import "theme";

    .app-workspace {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0;
        border: none;

        & .documents-header {
            display: flex;
            padding: 0;
            height: 30px;
            align-items: flex-end;
            border-left: none;
        }

        & .active-document {
            background: $container_fill;
            border-top: none;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

        }
    }
</style>
