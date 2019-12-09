<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';
  import { New, Saved, ScissorDocument } from '@/models/ScissorDocument';

  @Component
  export default class DocumentsIndicators extends Vue {

    @Prop({required: true})
    document!: ScissorDocument;

    @Prop({default: false})
    active!: boolean;

    get isSaved() {
      return this.document.state !== Saved;
    }

    get isNew() {
      return this.document.state === New;
    }
  };
</script>
<template>
    <span class="document-header" :class="{active}">
        <i class="document-header-new" v-if="isSaved" :class="{'new': isNew}">*</i>
        <span class="document-header-name">{{document.name}}</span>
        <a class="document-header-close">&times;</a>
    </span>
</template>
<style lang="scss" scoped>
    @import "theme";

    .document-header {
        min-width: 200px;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        border: solid thin black;
        margin-right: 2px;
        padding: 2px 5px;
        height: 20px;
        border-bottom: none;

        &.active {
            background: $container_fill;
            color: $container_box_text;
            & .document-header-name {
                font-weight: bold;
                font-style: normal;
            }
        }

        &-new {
            width: 10px;
            height: 10px;

            &.new {
                color: red;
            }
        }

        &-name {
            flex: 1;
            padding: 0 5px;
            font-style: italic;
        }

        &-close {
            display: block;
            color: white;
            text-decoration: none;
            width: 16px;
            height: 16px;
            text-align: center;
            line-height: 14px;

            border: solid thin #444444;
        }
    }
</style>
