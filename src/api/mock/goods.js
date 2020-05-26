export default  [
  { title: '采数据', index:'1', icon: 'location', children: [
    { title: '数据', items: [ '采集数据', '新增数据' ] }
  ] }, 
  { title: '慧管货', index: '2', icon: 'document', children: [
    { title: '销售', items: [ '销售订单', '销售退货历史' ] },
    { title: '进货', items: [ '进货订单', '进货退货历史' ] },
    { title: '服务', items: [ '服务超市', '服务订单' ] },
    { title: '库存', items: [ '库存查询', '入库历史', '出库历史' ] },
  ] }
];