<template>
  <div class="d2-admin-ant-layouts-login-container" flex="dir:top main:justify cross:center">
    <div class="d2-admin-ant-layouts-login-lang" flex-box="0"></div>
    <div class="d2-admin-ant-layouts-login-content" flex-box="1">
      <!-- top -->
      <div class="d2-admin-ant-layouts-login-top" flex="dir:top cross:center">
        <div class="d2-admin-ant-layouts-login-logo" flex="cross:center">
            <img class="logo" src="./image/logo-44x44@2x.png" alt="" srcset="">
            <span class="logo-title">D2Admin Ant</span>
        </div>
        <div class="d2-admin-ant-layouts-login-desc">
          在 D2Admin 上体验西湖区最具影响力的 Web 设计规范
        </div>
      </div>
      <!-- main -->
      <div class="d2-admin-ant-layouts-login-main">
        <div class="d2-admin-ant-layouts-login-form">
          <a-tabs
            class="d2-admin-ant-layouts-login-tab"
            defaultActiveKey="1"
            :animated="false">
            <!-- 账户密码登陆 -->
            <a-tab-pane tab="账户密码登陆" key="1">
              <d2-login-form-user/>
            </a-tab-pane>
            <!-- 手机号登陆 -->
            <a-tab-pane tab="手机号登陆" key="2" forceRender>
              <d2-login-form-phone/>
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </div>
    <footer class="d2-admin-ant-layouts-login-footer" flex-box="0">
      <div class="d2-admin-ant-layouts-login-links">
        <a title="help" target="_self" href="">帮助</a>
        <a title="privacy" target="_self" href="">隐私</a>
        <a title="terms" target="_self" href="">条款</a>
      </div>
      <div class="d2-admin-ant-layouts-login-copyright">
        Copyright <a-icon type="copyright" /> 2019 D2 Projects 开源组出品
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import d2LoginFormUser from './components/form-user'
import d2LoginFormPhone from './components/form-phone'

export default {
  components: {
    d2LoginFormUser,
    d2LoginFormPhone
  },
  data () {
    return {
      // 快速选择用户
      dialogVisible: false,
      users: [
        {
          name: '管理员',
          username: 'admin',
          password: 'admin'
        },
        {
          name: '编辑',
          username: 'editor',
          password: 'editor'
        },
        {
          name: '用户1',
          username: 'user1',
          password: 'user1'
        }
      ],
      // 表单
      formUser: {
        username: 'admin',
        password: 'admin',
        code: 'v9am'
      },
      // 校验
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions('d2admin/account', [
      'login'
    ]),
    /**
     * @description 提交表单
     */
    // 提交登录信息
    submit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 登录
          this.login({
            username: this.formUser.username,
            password: this.formUser.password
          })
            .then(() => {
              // 重定向对象不存在则返回顶层路径
              this.$router.replace(this.$route.query.redirect || '/')
            })
        } else {
          // 登录表单校验失败
          this.$message.error('表单校验失败')
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import './style';
</style>
