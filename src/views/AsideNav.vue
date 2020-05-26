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
      @select="handleSelect"
      :collapse="isCollapse"
    >
      <el-submenu 
        :index="`${index}`" 
        v-for='(navItem, index) in navList'
        :key='navItem.title'
      >
        <template slot="title">
          <i :class="`el-icon-${navItem.icon}`"></i>
          <span slot="title">{{ navItem.title }} </span>
        </template>
       <el-submenu
        v-for='(item, itemIndex) in navItem.children'
        :key='item.title'
        :index='`${index}-${itemIndex}`'
       >
          <span slot="title">{{ item.title }}</span>
          <el-menu-item 
            v-for="(childItem, childIndex) in item.items"
            :key='childItem'
            :index="`${index}-${itemIndex}-${childIndex}`"
          >{{ childItem }}</el-menu-item>
        </el-submenu>
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
          { title: '采数据', index:'0', icon: 'location', children: [
            { title: '数据', items: [ '采集数据', '新增数据' ] }
          ] }, 
          { title: '慧管货', index: '1', icon: 'document', children: [
            { title: '销售', items: [ '销售订单', '销售退货历史' ] },
            { title: '进货', items: [ '进货订单', '进货退货历史' ] },
            { title: '服务', items: [ '服务超市', '服务订单' ] },
            { title: '库存', items: [ '库存查询', '入库历史', '出库历史' ] },
          ] }, 
          { title: '慧管账', index: '2', icon: 'document', children: [
            { title: '收支', items: [ '日常收支' ] },
            { title: '资金往来', items: [ '应收欠款', '应付欠款', '资金流水', '账户转账', '销售开票' ] },
          ] }, 
          { title: '慧管客', index: '3', icon: 'document', children: [
            { title: '客户', items: [ '客户管理', '客户分类' ] },
            { title: '供应商', items: [ '供应商管理' ] },
          ] }, 
          { title: '慧分析', index: '4', icon: 'document', children: [
            { title: '进销存', items: [ '销售报表', '销售明细统计', '进货报表', '进销对比统计' , '全能库存变动表'] },
            { title: '财务', items: [ '经营状况报告', '利润报表', '业绩报表' ] },
          ] }, 
          { title: '慧营销', index: '5', icon: 'document', children: [
            { title: '营销', items: [ '零售收银', '收银清单' ] },
          ] }, 
          { title: '基础资料', index: '6', icon: 'document', children: [
            { title: '商品资料', items: [ '期初查询', '商品列表', '商品分类', '属性设置', '单位设置' ] },
            { title: '机构管理', items: [ '仓库管理' ] },
            { title: '收付款账户', items: [ '结算账户' ] },
          ] }, 
          { title: '系统设置', index: '6', icon: 'setting', children: [
            { title: '员工管理', items: [ '员工管理', '角色管理' ] },
            { title: '我的账户', items: [ '资料维护', '重置密码' ] },
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
      },
      handleSelect(key, keyPath) {
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