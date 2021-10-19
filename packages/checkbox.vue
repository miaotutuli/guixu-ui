<template>
  <label :class="['gx-checkbox', {
    'is-checked': isChecked
  }]">
    <span class="gx-checkbox__input">
      <span class="gx-checkbox__inner"></span>
      <input
        type="checkbox"
        class="gx-checkbox__original"
        :name="name"
        :value="label"
        v-model="model"
      >
    </span>
    <span class="gx-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'GxCheckbox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  components: {},
  computed: {
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(value) {
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value);
      }
    },
    isGroup() {
      return !!this.CheckboxGroup;
    },
    isChecked() {
      return this.isGroup ? this.model.includes(this.label) : this.model;
    }
  }
}
</script>

<style lang='scss' scoped>
.gx-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  &__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .gx-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &::after {
        box-sizing: border-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 2px;
        left: 5px;
        transform: rotate(45deg) scale(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .gx-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  &__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}

// 选中的样式
.gx-checkbox.is-checked {
  .gx-checkbox__input {
    .gx-checkbox__inner {
      border-color: #409eff;
      &::after {
        transform: rotate(45deg) scale(1);
        border-color: #409eff;
      }
    }
  }
  .gx-checkbox__label {
    color: #409eff;
  }
}
</style>
