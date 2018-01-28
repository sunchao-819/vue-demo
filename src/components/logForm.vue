<template>
  <div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.name" clearable class="logInput" placeholder="请输入用户名"></el-input>
        <span class="error-tips">{{ userErrors.errorText }}</span>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password" type="password" clearable class="logInput"
                  placeholder="请输入密码"></el-input>
        <span class="error-tips">{{ passwordErrors.errorText }}</span>
      </el-form-item>
      <!--<el-button type="primary" class="toLogin" @click="onLogin">登录</el-button>-->
      <p class="error-tips">{{ errorText }}</p>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          password: ''
        },
        errorText:''
      }
    },
    computed: {
      userErrors() {
        let errorText, status
        if (this.formLabelAlign.name.length > 10) {
          status = false
          errorText = '* 用户名过长，请保持在10个字符以内'
        } else {
          status = true
          errorText = ''
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors() {
        let errorText, status
        if (this.formLabelAlign.password.length > 12) {
          status = false
          errorText = '密码位数过长，请保持在12位以内'
        } else {
          status = true
          errorText = ''
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onLogin() {
        if (!this.userErrors.status || !this.passwordErrors.status) {
          this.errorText = '用户名或密码格式不正确'
        }
        else {
          this.errorText = ''
          this.$http.post('api/login')
            .then((res) => {
              this.$emit('has-login', res.data)
            }, (error) => {
              console.log(error)
            })
        }
      }
    }
  }
</script>

<style scoped>
  .logInput {
    width: 300px;
  }

  .toLogin {
    margin-left: 80px;
  }

  .error-tips {
    margin-left: 10px;
    color: red;
  }
</style>
