<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GxRadioGroup',
  provide() {
    return {
      RadioGroup: this
    }
  },
  props: {
    // gx-radio-group接收到了value值
    // 将来还需要触发当前组件的input事件
    // provide 与 inject 作用？父级通过provide传值，所有后代可以通过inject(加强版的props)获取
    value: null
  },
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang='scss' scoped>
</style>
