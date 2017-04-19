import { Button, ButtonGroup } from './button'
import Tag from './tag'
import { Radio, RadioGroup, RadioButton } from './radio'
import { Checkbox, CheckboxGroup } from './checkbox'
import Input from './input'
import InputNumber from './input-number'
import Textarea from './textarea'
import Badge from './badge'
import Switch from './switch'
import Slider from './slider'
import Tooltip from './tooltip'
import Popover from './popover'
import Alert from './alert'
import Notification from './notification'
import Progress from './progress'
import LoadingBar from './loading-bar'
import { Modal, Dialog } from './modal'
import { Select, Option, OptionGroup } from './select'
import { Dropdown, DropdownMenu, DropdownItem } from './dropdown'
import Table from './table'
import { Form, FormItem } from './form'
import { Breadcrumb, BreadcrumbItem } from './breadcrumb'
import Pagination from './pagination'
import Message from './message'

const components = {
  Button,
  ButtonGroup,
  Tag,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  Input,
  InputNumber,
  Textarea,
  Badge,
  Switch,
  Slider,
  Tooltip,
  Popover,
  Alert,
  Notification,
  Progress,
  LoadingBar,
  Modal,
  Select,
  Option,
  OptionGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  Form,
  FormItem,
  Breadcrumb,
  BreadcrumbItem,
  Pagination,
  Message
}

Notification.install = Vue => {
  Vue.prototype.$notify = Notification
}

for (const item in components) {
  if (!components[item].install && components[item].name) {
    components[item].install = function (Vue) {
      Vue.component(components[item].name, components[item])
    }
  }
}

function install (Vue) {
  if (install.installed) return

  for (const item in components) {
    if (components[item].install) {
      Vue.use(components[item])
    }
  }

  Vue.prototype.$Loading = LoadingBar
  Vue.prototype.$Modal = Dialog
  Vue.prototype.$Message = Message
}

/**
 * Global Install
 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
