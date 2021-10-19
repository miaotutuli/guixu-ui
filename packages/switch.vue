<template>
  <div class="gx-switch" @click="handleClick" :class="{'is-checked': value}">
    <span class="gx-switch__core" ref="core">
      <span class="gx-switch__button"></span>
    </span>
    <input
      class="gx-switch__input"
      type="checkbox"
      :name="name"
      ref="input"
    >
  </div>
</template>

<script>
export default {
  name: 'GxSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.setColor();
    // 控制checkbox的checkbox
    this.$refs.input.checked = this.value;
  },
  methods: {
    async handleClick() {
      this.$emit('input', !this.value);
      // 点击的时候，还需要修改背景颜色
      // 等待value发生了改变，再setColor
      // 数据修改后，等待DOm更新，再修改按钮的颜色
      await this.$nextTick();
      this.setColor();
      // 控制checkbox的checkbox
      this.$refs.input.checked = this.value;
    },
    setColor() {
      // 修改开关的颜色
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.gx-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  &__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .gx-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  &.is-checked {
    .gx-switch__core {
      border-color: #409eff;
      background-color: #409eff;
      .gx-switch__button {
        transform: translateX(20px);
      }
    }
  }
  &__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
}
</style>
