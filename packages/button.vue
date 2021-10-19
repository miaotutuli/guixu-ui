<template>
  <button class="gx-button" :class="[`gx-button--${type}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled
  }]"
  :disabled="disabled"
  @click="handleClick">
    <i v-if="icon" :class="icon"></i>
    <!-- 如果没有传入任何的内容，当我们没有传入插槽的时候，隐藏 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  // 起名字的好处：组件注册的时候能够获取到组件的名字
  name: 'GxButton',
  // 封装一个通用的组件，会对props做一个约束，props进行校验
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() {
    return {}
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style lang='scss' scoped>
.gx-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.gx-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}

.gx-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}

.gx-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}

.gx-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}

.gx-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

.gx-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}

.gx-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;

  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}

.gx-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;

  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.gx-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;

  &:hover,
  &:focus {
    background: #989399;
    border-color: #989399;
    color: #fff;
  }
}

.gx-button--warning.is-plain {
  color: #e6a23c;
  background: #f6fdec;
  border-color: #f5dab1;

  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}

.gx-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;

  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

.gx-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

.gx-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

.gx-button [class*=gx-icon-]+span {
  margin-left: 5px;
}

.gx-button.is-disabled {
  background: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
</style>
