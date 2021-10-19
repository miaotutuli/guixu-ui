<template>
  <div class="gx-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GxCheckboxGroup',
  components: {},
  provide() {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
