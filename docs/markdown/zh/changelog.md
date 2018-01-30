
# 更新日志

----

项目遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范

<div class="row changelog">
  <at-timeline>
    <at-timeline-item>
      <p class="head">v1.3.1</p>
      <p class="time"><span>2018-01-30</span></p>
      <ul class="content">
        <li>修复<span>i18n</span>不适配<span>vue-i18n@7.x</span>的 Bug。<a href="https://github.com/AT-UI/at-ui/issues/90">#90</a></li>
        <li>修复<span>Textarea</span>显示有误的 Bug</li>
      </ul>
    </at-timeline-item>
    <at-timeline-item color="red">
      <i slot="dot" class="icon icon-award"></i>
      <p class="head">v1.3.0</p>
      <p class="time"><span>2017-11-10</span></p>
      <ul class="content">
        <li>新增<span>Tabs</span>组件</li>
        <li>新增<span>Steps</span>组件</li>
        <li>新增<span>Rate</span>组件</li>
        <li>新增<span>Collapse</span>组件</li>
        <li>新增<span>Card</span>组件</li>
        <li>新增<span>Timeline</span>组件</li>
      </ul>
    </at-timeline-item>
    <at-timeline-item>
      <p class="head">v1.2.1</p>
      <p class="time"><span>2017-11-03</span></p>
      <ul class="content">
        <li>修复<span>LoadingBar</span>无法设置宽度的 Bug。<a href="https://github.com/AT-UI/at-ui/issues/35">#35</a></li>
        <li>修复<span>Select</span>disabled 依旧可以获取焦点的 Bug。<a href="https://github.com/AT-UI/at-ui/issues/29">#29</a></li>
      </ul>
    </at-timeline-item>
    <at-timeline-item color="red">
      <i slot="dot" class="icon icon-award"></i>
      <p class="head">v1.2.0</p>
      <p class="time"><span>2017-11-01</span></p>
      <ul class="content">
        <li>新增<span>Menu</span>组件对<span>vue-router</span>的支持。<a href="https://github.com/AT-UI/at-ui/issues/26">#26</a></li>
        <li>修复<span>v-for</span>中用<span>non-primitive</span>作为 key 的 Bug。<a href="https://github.com/AT-UI/at-ui/issues/33">#33</a></li>
        <li><span>Button</span>组件增加<span>native type</span>的支持。<a href="https://github.com/AT-UI/at-ui/issues/23">#23</a></li>
      </ul>
    </at-timeline-item>
    <at-timeline-item>
      <p class="head">v1.2.0-beta.2</p>
      <p class="time"><span>2017-09-03</span></p>
      <ul class="content">
        <li>新增<span>SSR</span>支持。<a href="https://github.com/AT-UI/at-ui/issues/15">#15</a>（by <a href="https://github.com/Atinux">Atinux</a>）</li>
        <li>修复<span>Select</span>组件不能使用<span>at-option-group</span>的 Bug。<a href="https://github.com/AT-UI/at-ui/issues/13">#13</a>（by <a href="https://github.com/StevenYuysy">StevenYuysy</a>）</li>
      </ul>
    </at-timeline-item>
    <at-timeline-item>
      <p class="head">v1.2.0-beta</p>
      <p class="time"><span>2017-08-25</span></p>
      <ul class="content">
        <li>新增<span>Table</span>组件</li>
      </ul>
    </at-timeline-item>
    <at-timeline-item>
      <p class="head">v1.1.2</p>
      <p class="time"><span>2017-08-17</span></p>
      <ul class="content">
        <li>新增<span>i18n</span>支持</li>
      </ul>
    </at-timeline-item>
    <at-timeline-item>
      <p class="head">v1.1.1</p>
      <p class="time"><span>2017-08-10</span></p>
      <ul class="content">
        <li>新增<span>Menu</span>组件</li>
        <li>修复 Bugs</li>
      </ul>
    </at-timeline-item>
    <at-timeline-item color="red">
      <i slot="dot" class="icon icon-award"></i>
      <p class="head">v1.1.0</p>
      <p class="time"><span>2017-08-01</span></p>
      <ul class="content">
        <li>更改<span>Notification</span>，<span>Alert</span>等组件的样式</li>
        <li>修复 Bugs</li>
      </ul>
    </at-timeline-item>
    <at-timeline-item color="red">
      <i slot="dot" class="icon icon-award"></i>
      <p class="head">v1.0.0</p>
      <p class="time"><span>2017-06-27</span></p>
      <ul class="content">
        <li>发布<span>AT-UI</span>v1.0.0</li>
        <li>发布<span>AT-UI-Style</span>v1.0.0</li>
        <li>发布第一个版本，包含了 <span>22</span> 个组件</li>
      </ul>
    </at-timeline-item>
  </at-timeline>
</div>

<style lang="scss" scoped>
.changelog {
  margin: 32px 0;

  span {
    padding: .3em .5em;
    margin: 0 4px;
    font-size: .9em;
    vertical-align: middle;
    border: 1px solid #ECECEC;
    border-radius: 2px;
    background-color: #F7F7F7;
  }
  .head {
    margin-bottom: 16px;
    color: #4F7DE2;
    font-size: 16px;
    font-weight: bold;
  }
  .time {
    margin: 16px 0;
    font-size: 12px;

    span {
      margin: 0;
    }
  }
  .content {
    li {
      margin: 4px 0;
      margin-left: 24px;
      list-style-type: circle;
      font-size: 14px;
      line-height: 1.8;
    }
  }
}
</style>
