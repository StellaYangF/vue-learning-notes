<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>
  <el-menu 
    class="el-menu-vertical-demo" 
    @open="handleOpen" 
    @close="handleClose" 
    :collapse="isCollapse"
  >
    <el-submenu 
      :index="`${index}`" 
      v-for='(navItem, index) in navList'
      :key='navItem.title'
    >
      <template slot="navItem.title">
        <i class="el-icon-setting"></i>
        <span slot="title">{{ index }}</span>
      </template>
      <el-menu-item index="1-1">采集数据</el-menu-item>
      <el-menu-item index="1-2">新增数据</el-menu-item>
    </el-submenu>
    </el-menu >
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        navList: [
          { title: '采数据', index:'1', icon: 'location', children: [
            { title: '数据', items: [ '采集数据', '新增数据' ] }
          ] }, 
          { title: '慧管货', index: '2', icon: 'document', children: [
            { title: '销售', items: [ '销售订单', '销售退货历史' ] },
            { title: '进货', items: [ '进货订单', '进货退货历史' ] },
            { title: '服务', items: [ '服务超市', '服务订单' ] },
            { title: '库存', items: [ '库存查询', '入库历史', '出库历史' ] },
          ] }
        ],
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>