<template>
  <el-row class='home-row'>
    <el-col :span='5'>
      <AsideNav></AsideNav>
    </el-col>
    <el-col :span='19'>
      container
    </el-col>
  </el-row>
</template>

<script>
import AsideNav from './AsideNav';

export default {
  name: 'Home',
  components: {
    AsideNav,
  },
}
</script>
