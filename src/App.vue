<template>
  <div id="app">
   <el-container style='min-width: 960px'>
     <el-header>
       <PageHeader></PageHeader>
     </el-header>
     <el-main>
       <router-view></router-view>
     </el-main>
     <el-footer>
       <PageFooter></PageFooter>
     </el-footer>
   </el-container>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  components: {
    PageHeader,
    PageFooter,
  }
}
</script>

<style lang="scss">
@import './styles/var';
* {
  margin: 0;
  padding: 0;
}
.el-header, .el-footer  {
  background: $themeBg;
}
.el-main {
  min-height: calc(100vh - 120px);
}
</style>
