<template>
  <el-row class='header-row'>
    <el-col :span='6'>
      <img src="@/assets/logo.png" alt="logo" class='logo'>
    </el-col>
    <el-col :span='18'>
      <el-menu
        class='menu'
        mode='horizontal'
        text-color="#fff"
        active-text-color='#fff'
      >
        <template v-if='hasSignin'>
          <el-menu-item><i class='el-icon-menu'></i> 快捷</el-menu-item>
          <el-menu-item><i class='el-icon-bell'></i> 消息</el-menu-item>
          <el-menu-item><i class='el-icon-setting'></i> 工具</el-menu-item>
          <el-menu-item><i class='el-icon-service'></i> 客服</el-menu-item>
          <el-menu-item>
            <el-avatar size="medium" :src="circleUrl" v-if='circleUrl'></el-avatar>
            <i class='el-icon-user' v-else></i>
          </el-menu-item>
        </template>
        <template v-else>
           <el-menu-item index='/signin'><i class='el-icon-service'></i> 登录</el-menu-item>
          <el-menu-item index='siginup'><i class='el-icon-service'></i> 注册</el-menu-item>
        </template>         
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      circleUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      hasSignin: true,
    }
  },
}
</script>

<style lang="scss">
@import '../styles/var';

  .header-row {
    height: 100%;
    .logo {
      margin: 5px;
      height: 50px;
    }
    .menu, .logo {
      display: inline-block;
    }
    .menu {
      float: right;
      background: $themeBg;
      .el-menu-item {
        opacity: .8;
        &:hover, &:focus{
          background: $themeBg !important;
          opacity: 1;
          cursor: pointer;
        }
      }
    }
  }
</style>