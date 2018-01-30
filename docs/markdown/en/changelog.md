
# Change Log

----

`AT-UI` strictly follows [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/).

<div class="row changelog">
  <at-timeline>
    <at-timeline-item>
      <p class="head">v1.3.1</p>
      <p class="time"><span>2018-01-30</span></p>
      <ul class="content">
        <li>Fix<span>i18n</span>didn't compatible with<span>vue-i18n@7.x</span>. <a href="https://github.com/AT-UI/at-ui/issues/90">#90</a></li>
        <li>Fix<span>Textarea</span>display wrong.</li>
      </ul>
    </at-timeline-item>
    <at-timeline-item color="red">
      <i slot="dot" class="icon icon-award"></i>
      <p class="head">v1.3.0</p>
      <p class="time"><span>2017-11-10</span></p>
      <ul class="content">
        <li>New component<span>Tabs</span></li>
        <li>New component<span>Steps</span></li>
        <li>New component<span>Rate</span></li>
        <li>New component<span>Collapse</span></li>
        <li>New component<span>Card</span></li>
        <li>New component<span>Timeline</span></li>
      </ul>
    </at-timeline-item>
    <at-timeline-item>
      <p class="head">v1.2.1</p>
      <p class="time"><span>2017-11-03</span></p>
      <ul class="content">
        <li>Fix <span>LoadingBar</span> cannot set width. <a href="https://github.com/AT-UI/at-ui/issues/35">#35</a></li>
        <li>Fix disabled <span>Select</span>can get focus. <a href="https://github.com/AT-UI/at-ui/issues/29">#29</a></li>
      </ul>
    </at-timeline-item>
    <at-timeline-item color="red">
      <i slot="dot" class="icon icon-award"></i>
      <p class="head">v1.2.0</p>
      <p class="time"><span>2017-11-01</span></p>
      <ul class="content">
        <li>Add <span>Menu</span>with<span>vue-router</span>support. <a href="https://github.com/AT-UI/at-ui/issues/26">#26</a></li>
        <li>Fix <span>v-for</span>use<span>non-primitive</span> value as key. <a href="https://github.com/AT-UI/at-ui/issues/33">#33</a></li>
        <li>Add <span>Button</span>with<span>native type</span>support. <a href="https://github.com/AT-UI/at-ui/issues/23">#23</a></li>
      </ul>
    </at-timeline-item>
    <at-timeline-item>
      <p class="head">v1.2.0-beta.2</p>
      <p class="time"><span>2017-09-03</span></p>
      <ul class="content">
        <li>Add <span>SSR</span>support. <a href="https://github.com/AT-UI/at-ui/issues/15">#15</a> (by <a href="https://github.com/Atinux">Atinux</a>)</li>
        <li>Fix <span>Select</span>cannot use with<span>at-option-group</span>. <a href="https://github.com/AT-UI/at-ui/issues/13">#13</a> (by <a href="https://github.com/StevenYuysy">StevenYuysy</a>)</li>
      </ul>
    </at-timeline-item>
    <at-timeline-item>
      <p class="head">v1.2.0-beta</p>
      <p class="time"><span>2017-08-25</span></p>
      <ul class="content">
        <li>New component<span>Table</span></li>
      </ul>
    </at-timeline-item>
    <at-timeline-item>
      <p class="head">v1.1.2</p>
      <p class="time"><span>2017-08-17</span></p>
      <ul class="content">
        <li>Add<span>i18n</span>supoort</li>
      </ul>
    </at-timeline-item>
    <at-timeline-item>
      <p class="head">v1.1.1</p>
      <p class="time"><span>2017-08-10</span></p>
      <ul class="content">
        <li>New component<span>Menu</span></li>
        <li>Fix Bugs</li>
      </ul>
    </at-timeline-item>
    <at-timeline-item color="red">
      <i slot="dot" class="icon icon-award"></i>
      <p class="head">v1.1.0</p>
      <p class="time"><span>2017-08-01</span></p>
      <ul class="content">
        <li>Fix style issue of <span>Notification</span>，<span>Alert</span></li>
        <li>Fix Bugs</li>
      </ul>
    </at-timeline-item>
    <at-timeline-item color="red">
      <i slot="dot" class="icon icon-award"></i>
      <p class="head">v1.0.0</p>
      <p class="time"><span>2017-06-27</span></p>
      <ul class="content">
        <li>Release<span>AT-UI</span>v1.0.0</li>
        <li>Release<span>AT-UI-Style</span>v1.0.0</li>
        <li>The first release contains <span>22</span> components</li>
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
