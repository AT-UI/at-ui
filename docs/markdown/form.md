
# Form 表单

----

## 简单的表单

以下是简单的登录校验框

:::demo

```html
<at-form :model="formLogin" :rules="ruleLogin" ref="formLogin">
  <at-form-item prop="username">
    <at-input v-model="formLogin.username" placeholder="用户名">
      <template slot="prepend">
        <i class="icon icon-link"></i>
      </template>
    </at-input>
  </at-form-item>
  <at-form-item prop="password">
    <at-input v-model="formLogin.password" placeholder="密码">
      <template slot="prepend">
        <i class="icon icon-link"></i>
      </template>
    </at-input>
  </at-form-item>
  <at-form-item>
    <at-button type="primary" size="small" @click.prevent="handleSubmit('formLogin')">登录</at-button>
  </at-form-item>
</at-form>
```

:::

## 多个表单控件

## 表单布局

表单有三种布局方式，设置 `formLayout`，可以改变表单标签的布局方式

## 表单校验

## 自定义表单校验

## 弹出层中新建表单

## 动态增减表单项

<script>
  export default {
    data () {
      return {
        formLogin: {
          username: '',
          password: ''
        },
        ruleLogin: {
          username: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }, {
            type: 'string',
            min: 6,
            message: '密码长度不能小于6',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            this.$notify({
              type: 'success',
              message: '提交成功'
            })
          } else {
            this.$notify({
              type: 'error',
              message: '校验失败'
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.at-input {
  width: 200px;
}
</style>
