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
