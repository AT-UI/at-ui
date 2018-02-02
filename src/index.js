import Button from './components/button'
import ButtonGroup from './components/button-group'
import Tag from './components/tag'
import Radio from './components/radio'
import RadioGroup from './components/radio-group'
import RadioButton from './components/radio-button'
import Checkbox from './components/checkbox'
import CheckboxGroup from './components/checkbox-group'
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
import Modal from './components/modal'
import Dialog from './components/dialog'
import Select from './components/select'
import Option from './components/option'
import OptionGroup from './components/option-group'
import Dropdown from './components/dropdown'
import DropdownMenu from './components/dropdown-menu'
import DropdownItem from './components/dropdown-item'
import Breadcrumb from './components/breadcrumb'
import BreadcrumbItem from './components/breadcrumb-item'
import Pagination from './components/pagination'
import Message from './components/message'
import Menu from './components/menu'
import MenuItem from './components/menu-item'
import MenuItemGroup from './components/menu-item-group'
import Submenu from './components/submenu'
import Table from './components/table'
import Card from './components/card'
import Collapse from './components/collapse'
import CollapseItem from './components/collapse-item'
import Steps from './components/steps'
import Step from './components/step'
import Rate from './components/rate'
import Tabs from './components/tabs'
import TabPane from './components/tab-pane'
import Timeline from './components/timeline'
import TimelineItem from './components/timeline-item'
import locale from './locale'

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
  Table,
  Card,
  Collapse,
  CollapseItem,
  Steps,
  Step,
  Rate,
  Tabs,
  TabPane,
  Timeline,
  TimelineItem,
  Notification,
  Dialog,
  Message
}

function install (Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)

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

module.exports = {
  install,
  locale: locale.use,
  i18n: locale.i18n,
  ...components
}

module.exports.default = module.exports
