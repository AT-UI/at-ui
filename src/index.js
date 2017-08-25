import { Button, ButtonGroup } from './components/button'
import Tag from './components/tag'
import { Radio, RadioGroup, RadioButton } from './components/radio'
import { Checkbox, CheckboxGroup } from './components/checkbox'
import Input from './components/input'
import InputNumber from './components/input-number'
import Textarea from './components/textarea'
import Badge from './components/badge'
import Switch from './components/switch'
import Slider from './components/slider'
import Tooltip from './components/tooltip'
import Popover from './components/popover'
import Alert from './components/alert'
import Notification from './components/notification'
import Progress from './components/progress'
import LoadingBar from './components/loading-bar'
import { Modal, Dialog } from './components/modal'
import { Select, Option, OptionGroup } from './components/select'
import { Dropdown, DropdownMenu, DropdownItem } from './components/dropdown'
import { Breadcrumb, BreadcrumbItem } from './components/breadcrumb'
import Pagination from './components/pagination'
import Message from './components/message'
import { Menu, MenuItem, MenuItemGroup, Submenu } from './components/menu'
import Table from './components/table'

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
  Progress,
  LoadingBar,
  Modal,
  Select,
  Option,
  OptionGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  BreadcrumbItem,
  Pagination,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Table
}

function install (Vue) {
  if (install.installed) return

  for (const item in components) {
    if (components[item].name) {
      Vue.component(components[item].name, components[item])
    }
  }

  Vue.prototype.$Notify = Notification
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
