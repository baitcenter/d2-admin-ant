<template>
  <a-form
    :form="form"
    class="login-form"
    @submit="handleSubmit">
    <a-form-item>
      <a-input
        v-decorator="[
          'phone',
          { rules: [{ required: true, message: '请输入手机号' }] }
        ]"
        placeholder="手机号"
        size="large">
        <a-icon slot="prefix" type="mobile" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-row :gutter="8">
        <a-col :span="16">
          <a-input
            v-decorator="[
              'phoneCode',
              { rules: [{ required: true, message: '请输入验证码' }] }
            ]"
            type="password"
            placeholder="验证码"
            size="large">
            <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-col>
        <a-col :span="8">
          <a-button size="large" :style="{ width: '100%' }">获取验证码</a-button>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item>
      <p>
        <a-checkbox
          v-decorator="[
            'formPhoneRemember',
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
