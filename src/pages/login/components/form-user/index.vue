<template>
  <a-form
    :form="form"
    class="login-form"
    @submit="handleSubmit">
    <a-form-item>
      <a-input
        v-decorator="[
          'formUserUserName',
          { rules: [{ required: true, message: '请输入用户名' }] }
        ]"
        placeholder="用户名: admin"
        size="large">
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'formUserPassword',
          { rules: [{ required: true, message: '请输入密码' }] }
        ]"
        type="password"
        placeholder="密码: 000000"
        size="large">
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <p>
        <a-checkbox
          v-decorator="[
            'formUserRemember',
            {
              valuePropName: 'checked',
              initialValue: true,
            }
          ]">
          自动登录
        </a-checkbox>
        <a :style="{ float: 'right' }" href="">忘记密码</a>
      </p>
      <a-button
        size="large"
        type="primary"
        html-type="submit"
        :style="{ width: '100%' }">
        登录
      </a-button>
      或者 <a href="">注册账户</a>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
