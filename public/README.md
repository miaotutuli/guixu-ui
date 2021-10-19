#### 1.基本介绍

##### 1.1课程介绍

- 做什么？

- ```
  vue进阶-从0到1搭建UI组件库
  ```

- 哪些内容？

- ```
  封装常见的功能性组件(Button、Modal、Form相关)
  把组件封装成UI组件库并发布到npm上
  ```

- 涉及知识点？

- ```
  vue基础语法
  组件基本语法
  组件通讯(sync, provide, inject)
  插槽的使用
  props校验
  过渡与动画处理
  计算属性与监听属性
  v-model语法糖
  vue插件机制
  npm发布
  ```

- 课程收获？

- ```
  掌握组件封装的语法和技巧
  学会造轮子，了解element-ui组件库的实现原理
  搭建和积累自己的组件库
  ```

- 学习前提？

- ```
  属于vue的进阶课程，所以要求
  1.有一定的vue基础，懂vue的基本语法
  2.熟悉ES6的一些常见语法
  3.对vue感兴趣
  ```

#### 2.常见组件封装

##### 2.1项目初始化

- 使用vue-cli脚手架快速搭建一个vue项目

- ```
  // 选择scss babel 和 eslint
  vue create demo
  ```

- 启动项目

- ```
  cd demo
  yarn serve
  ```

- 安装组件库

- ```
  yarn add gx-ui
  ```

- 全局导入

- ```
  import GuiXuUI from 'gx-ui';
  import 'gx-ui/lib/gxui.css';
  Vue.use(GuiXuUI);
  ```

- 

##### 2.2 button组件

###### 2.2.1 前置知识

- ```
  组件通讯
  组件插槽
  props校验
  ```

###### 2.2.2 参数支持

- | 参数名   | 参数描述                                      | 参数类型 | 默认值  |
  | -------- | --------------------------------------------- | -------- | ------- |
  | type     | 按钮类型(primary/success/warning/danger/info) | string   | default |
  | plain    | 是否是朴素按钮                                | boolean  | false   |
  | round    | 是否是圆角按钮                                | boolean  | false   |
  | circle   | 是否是圆形按钮                                | boolean  | false   |
  | disabled | 是否禁用按钮                                  | boolean  | false   |
  | icon     | 图标类名                                      | string   | 无      |

###### 2.2.3 事件支持

- | 事件名 | 事件描述 |
  | ------ | -------- |
  | click  | 点击事件 |

###### 2.2.4 基本结构

- ```
  <template>
    <button class="gx-button">
      <span><slot></slot></span>
    </button>
  </template>
  ```

- 样式

- ```
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
  ```
  
- 



###### 2.2.5 type属性

结构

```
<button class="gx-button" :class="[`gx-button--${type}`]">
```

js

```
props: {
  type: {
    type: String,
    default: 'default'
  }
}
```

样式

```
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
```

###### 2.2.6 plain 属性

样式

```
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
```



###### 2.2.7 round属性

```
.gx-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
```



###### 2.2.8 circle属性

```
.gx-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
```



###### 2.2.9 icon的支持

```
.gx-button [class*=gx-icon-]+span {
  margin-left: 5px;
}
```



###### 2.2.10 click事件的支持

```
<button class="gx-button" :class="[`gx-button--${type}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle
  }]"
  @click="handleClick">

handleClick(e) {
	this.$emit('click', e);
}
```



##### 2.3 dialog组件

###### 2.3.1 前置知识

```
vue过渡与动画
sync修饰符
具名插槽与v-slot指令
```

###### 2.3.2 参数支持

| 参数名  | 参数描述                       | 参数类型 | 默认值 |
| ------- | ------------------------------ | -------- | ------ |
| title   | 对话框标题                     | string   | 提示   |
| width   | 宽度                           | string   | 50%    |
| top     | 与顶部的距离                   | string   | 15vh   |
| visible | 是否显示dialog(支持sync修饰符) | boolean  | false  |

###### 2.3.3 事件支持

| 事件名 | 事件描述         |
| ------ | ---------------- |
| opened | 模态框显示的事件 |
| closed | 模态框关闭的事件 |

###### 2.3.4 插槽说明

| 插槽名称 | 插槽描述           |
| -------- | ------------------ |
| default  | dialog的内容       |
| title    | dialog的标题       |
| footer   | dialog的底部操作区 |

###### 2.3.5 基本结构

结构

```
<!-- 对话框的遮罩 -->
  <div class="gx-dialog__wrapper">
    <div class="gx-dialog">
      <div class="gx-dialog__header">
        <span class="gx-dialog__title">提示</span>
        <button class="gx-dialog__headerbtn">
          <i class="gx-icon-close"></i>
        </button>
      </div>
      <div class="gx-dialog__body">
        <span>这是一段信息</span>
      </div>
      <div class="gx-dialog__footer">
        <gx-button>取消</gx-button>
        <gx-button type="primary">确定</gx-button>
      </div>
    </div>
  </div>
```

样式

```
.gx-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .gx-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .gx-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }

      .gx-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .gx-icon-guanbi {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }

    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .gx-button:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
}


@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.dialog-fade-enter-active {
  animation: fade 0.3s;
}

.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
```



###### 2.3.6 title属性

title既支持传入title属性，也支持传入title插槽

结构

```
<slot name="title">
	<span class="gx-dialog__title">{{title}}</span>
</slot>
```

js

```

```



###### 2.3.7 width属性与top属性



###### 2.3.8 内容插槽



###### 2.3.9 底部插槽



###### 2.3.10 控制显示与隐藏



###### 2.3.11 动画处理



##### 2.4 input组件

###### 2.4.1 参数支持

| 参数名称      | 参数描述                  | 参数类型 | 默认值 |
| ------------- | ------------------------- | -------- | ------ |
| placeholder   | 占位符                    | string   | 无     |
| type          | 文本框类型(text/password) | string   | text   |
| disabled      | 禁用                      | boolean  | false  |
| clearable     | 是否显示清空按钮          | boolean  | false  |
| show-password | 是否显示密码切换按钮      | boolean  | false  |
| name          | name属性                  | string   | 无     |



###### 2.4.2 事件支持

| 事件名称 | 事件描述       |
| -------- | -------------- |
| blur     | 失去焦点事件   |
| change   | 内容改变事件   |
| focus    | 获取的焦点事件 |



###### 2.4.3 基本结构

基本结构

```
<div class="gx-input">
    <input 
      :type="type"
      :class="[{
        'is-disabled': disabled
      }, 'gx-input__inner']"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    >
  </div>
```

样式

```
.gx-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  &__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }

    &.is-disabled {
      background: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
```



###### 2.4.4 props处理placeholder, type, name



###### 2.4.5 v-model语法糖



###### 2.4.6 clearable与show-password处理

如果给input组件传入clearable属性，会显示一个清空按钮，如果传入show-password, 则会显示一个用于切换密码显示的处理

- 基本结构

- ```
  <div :class="['gx-input', {
      'gx-input--suffix': showSuffix
    }]">
    <!-- 如果传了show-password, 判断是否需要切换密码的显示，如果不传，不判断 -->
      <input
        :type="showPassword ? (passwordVisible ? 'text' : 'password'): type"
        :class="[{
          'is-disabled': disabled
        }, 'gx-input__inner']"
        :placeholder="placeholder"
        :name="name"
        :disabled="disabled"
        :value="value"
        @input="handleInput"
      >
      <span class="gx-input__suffix">
        <i class="gx-icon-guanbi" v-if="clearable && value" @click="clear"></i>
        <i :class="['gx-icon-view', {
          'gx-icon-view-active': passwordVisible
        }]" v-if="showPassword" @click="handlePassword"></i>
      </span>
    </div>
  ```

- props接收

- ```
  clearable: {
      type: Boolean,
      default: false
  },
  showPassword: {
      type: Boolean,
      default: false
  }
  ```

- 控制按钮显示和隐藏

- ```
  <span class="gx-input__suffix">
        <i class="gx-icon-guanbi" v-if="clearable && value" @click="clear"></i>
        <i :class="['gx-icon-view', {
          'gx-icon-view-active': passwordVisible
        }]" v-if="showPassword" @click="handlePassword"></i>
      </span>
  ```

- 样式

- ```
  .gx-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    &__inner {
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 100%;
  
      &:focus {
        outline: none;
        border-color: #409eff;
      }
  
      &.is-disabled {
        background: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }
  
    &--suffix {
      .gx-input__inner {
        padding-right: 40px;
      }
      .gx-input__suffix {
        position: absolute;
        height: 100%;
        right: 10px;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        z-index: 900;
        i {
          color: #c0c4cc;
          font-size: 14px;
          cursor: pointer;
          transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
          &:not(:last-child) {
            margin-right: 5px;
          }
          &.gx-icon-view-active {
            color: blue;
          }
        }
      }
    }
  }
  ```

- 

##### 2.5 switch组件

###### 2.5.1 参数支持

| 参数名称      | 参数描述             | 参数类型 | 默认值 |
| ------------- | -------------------- | -------- | ------ |
| v-model       | 双向绑定             | boolean  | false  |
| name          | name属性             | string   | text   |
| activeColor   | 自定义的激活的颜色   | string   |        |
| inactiveColor | 自定义的不激活的颜色 | string   |        |



###### 2.5.2 事件支持

| 事件名称 | 事件描述           |
| -------- | ------------------ |
| change   | change时触发的事件 |

###### 2.5.3 基本结构

基本结构

```
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
```

样式

```
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
```

事件处理程序

```
methods: {
    handleClick() {
      this.$emit('input', !this.value);
    }
  }
```

控制选中样式

```
<label class="gx-switch" @click="handleClick" :class="{'is-checked': value}">
```

###### 2.5.4 v-model双向绑定

接收value值

```
value: {
      type: Boolean,
      default: false
    }
```

注册点击事件

```
<label class="gx-switch" @click="handleClick">
```

事件处理程序

```
methods: {
    handleClick() {
      this.$emit('input', !this.value);
    }
  }
```

选中样式

```
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
```



###### 2.5.5 自定义颜色

在使用switch时，希望能够自定义开关的颜色

```
<gx-switch
      v-model="active"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></gx-switch>
```

props接收

```
activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    }
```

封装设置颜色的方法

```
setColor() {
      // 修改开关的颜色
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    }
```

页面一进入调用

```
mounted() {
    this.setColor();
  }
```

改变状态后调用

```
async handleClick() {
      this.$emit('input', !this.value);
      // 点击的时候，还需要修改背景颜色
      // 等待value发生了改变，再setColor
      // 数据修改后，等待DOm更新，再修改按钮的颜色
      await this.$nextTick();
      this.setColor();
    }
```

###### 2.5.6 name属性支持

用户在使用switch组件的时候，实质上是当成表单元素来使用的，因此可能会用到组件的name属性。因此需要在switch组件中添加一个checkbox, 并且当值改变的时候，也需要设置checkbox的value值

结构

```
<input
      class="gx-switch__input"
      type="checkbox"
      :name="name"
      ref="input"
    >
```



##### 2.6 radio组件

###### 2.6.1 前置知识点

radio的基本使用

###### 2.6.2 参数支持

| 参数名称 | 参数描述        | 参数类型                | 默认值 |
| -------- | --------------- | ----------------------- | ------ |
| v-model  | 双向绑定        | boolean                 | false  |
| label    | 单选框的value值 | string、number、boolean | ''     |
| name     | name属性        | string                  |        |

###### 2.6.3 基本结构

结构

```
<label :class="['gx-radio', {
    'is-checked': label === value
  }]">
    <span class="gx-radio__input">
      <span class="gx-radio__inner"></span>
      <input
        class="gx-radio__original"
        type="radio"
        :value="label"
        :name="name"
        v-model="model"
      >
    </span>
    <span class="gx-radio__label">
      <slot></slot>
      <!-- 如果没有传内容，我们就把label当成内容 -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
```

样式

```
.gx-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  &__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .gx-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &::after {
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .gx-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  &__label {
    font-size: 14px;
    padding-left: 8px;
  }

  // 选中样式
  &.is-checked {
    .gx-radio__input {
      .gx-radio__inner {
        border-color: #409eff;
        &::after {
          background: #409eff;
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
    .gx-radio__label {
      color: #409eff;
    }
  }
}
```

js

```
export default {
  name: 'GxRadio',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      // 需要提供一个计算属性 model
      get() {
        return this.value;
      },
      set(value) {
        // 触发父组件的input事件
        this.$emit('input', value);
      }
    }
  }
}
```



##### 2.7 radio-group组件

###### 2.7.1 radio-group基本结构

基本结构

```
<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>
```

js

```
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
```

###### 2.7.2 raiod基本结构

基本结构

```
<template>
  <label :class="['gx-radio', {
    'is-checked': label === model
  }]">
    <span class="gx-radio__input">
      <span class="gx-radio__inner"></span>
      <input
        class="gx-radio__original"
        type="radio"
        :value="label"
        :name="name"
        v-model="model"
      >
    </span>
    <span class="gx-radio__label">
      <slot></slot>
      <!-- 如果没有传内容，我们就把label当成内容 -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
```

js

```
export default {
  name: 'GxRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      // 需要提供一个计算属性 model
      get() {
        // 除了从this.value取值，还可以从this.RadioGroup.value中取值
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        // 判断触发父组件的input事件还是RadioGroup组件的input事件
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value);
      }
    },
    isGroup() {
      // 用于判断radio是否被radioGroup所包裹
      return !!this.RadioGroup;
    }
  }
}
```

样式

```
.gx-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  &__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .gx-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &::after {
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .gx-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  &__label {
    font-size: 14px;
    padding-left: 8px;
  }

  // 选中样式
  &.is-checked {
    .gx-radio__input {
      .gx-radio__inner {
        border-color: #409eff;
        &::after {
          background: #409eff;
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
    .gx-radio__label {
      color: #409eff;
    }
  }
}
```



##### 2.8 checkbox组件与checkbox-group组件

###### 2.8.1 checkbox组件

基本结构

```
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
```

js

```
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
```

样式

```
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
```



###### 2.8.2 checkbox-group组件

基本结构

```
<template>
  <div class="gx-checkbox-group">
    <slot></slot>
  </div>
</template>
```

js

```
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
```

##### 2.9 form组件与form-item组件

###### 2.9.1 form组件

基本结构

```
<template>
  <div class="gx-form">
    <slot></slot>
  </div>
</template>
```

js

```
export default {
  name: 'GxForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide() {
    return {
      Form: this
    }
  }
}
```

###### 2.9.2 form-item组件

基本结构

```
<template>
  <div class="gx-form-item">
    <label class="gx-form-item__label" :style="{width: Form.labelWidth}">{{label}}</label>
    <div class="gx-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>
```

js

```
export default {
  name: 'GxFormItem',
  props: {
    label: String
  },
  inject: ['Form']
}
```

样式

```
.gx-form-item {
  margin-bottom: 25px;
  .gx-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .gx-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
```



#### 3 封装成UI组件库

##### 3.1 目录调整

- 根目录创建两个文件夹packages和examples

- ```
  packages: 用于存放所有的组件
  examples: 用于进行测试，把src改成examples
  ```

- 把components中所有的组件以及fonts字体图标库都放入到packages中

新增vue.config.js配置

```
const path = require('path');
module.exports = {
  pages: {
    index: {
      // 修改项目的入口文件
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展webpack配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项
        return options;
      })
  }
}
```

在packages目录下新增index.js文件

```
// 整个包的入口
import GxButton from './button.vue';
import GxDialog from './dialog.vue';
import GxInput from './input.vue';
import GxSwitch from './switch.vue';
import GxRadio from './radio.vue';
import GxRadioGroup from './radio-group.vue';
import GxCheckbox from './checkbox.vue';
import GxCheckboxGroup from './checkbox-group.vue';
import GxForm from './form.vue';
import GxFormItem from './form-item.vue';
import './fonts/iconfont.css';

// 存储组件列表
const components = [
  GxButton,
  GxDialog,
  GxInput,
  GxSwitch,
  GxRadio,
  GxRadioGroup,
  GxCheckbox,
  GxCheckboxGroup,
  GxForm,
  GxFormItem
]

// 定义install方法，接收Vue作为参数。如果使用use注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component);
  })
}

// 判断是否是直接引入文件，如果是，就不用调用 Vue.use
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
}
```

#### 4 发布到npm与github

