<template>
  <div class="about">
    <h1>This is an about page</h1>
    <vxe-grid v-bind="gridOptions">
      <template #odds_default="{ row }"
        ><span v-if="row.odds"> {{ row.odds }} </span>
        <span v-else
          ><p style="line-height: 10px">{{ row.c_name }}</p>
          <p style="line-height: 10px">{{ row.c_odds }}</p></span
        ></template
      >
      <template #name_default="{ row }"
        ><span v-if="row.name"> 发货仓库：{{ row.name }} </span>
        <span v-else
          ><p style="line-height: 10px">{{ row.c_name }}</p>
          <p style="line-height: 10px">{{ row.c_odds }}</p></span
        ></template
      >
      <template #shop_default="{ row }"
        ><span v-if="row.addr"> 配送地址：{{ row.addr }} </span>
        <span v-else>{{ row.c_shop }}</span></template
      >
      <template #sendNums_default="{ row }"
        ><span v-if="row.transform"> 头程物流：{{ row.transform }} </span>
        <span v-else>{{ row.c_seedNums }}</span></template
      >
      <template #getNums_default="{ row }"
        ><span v-if="row.getNums"> 预估费用： -- </span></template
      >
      <template #diff_default="{ row }"
        ><span v-if="row.diffNums"> 实际费用： -- </span></template
      >
    </vxe-grid>
    <ul>
      <li>
        <vxe-table
          border
          ref="xTable1"
          :data="tableData"
          :row-config="{isCurrent: true, isHover: true}"
        >
          <vxe-column type="checkbox" width="60"></vxe-column>
          <vxe-column field="name" title="Name"></vxe-column>
          <vxe-column field="sex" title="Sex"></vxe-column>
          <vxe-column field="age" title="Age"></vxe-column>
          <vxe-column
            field="address"
            title="Address"
            show-overflow
          ></vxe-column>
        </vxe-table>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridOptions: {
        border: false,
        showOverflow: true,
        keepSource: true,
        rowId: "id",
        rowConfig: {
          isHover: true,
        },
        columnConfig: {
          resizable: false,
        },
        treeConfig: {
          transform: true,
          rowField: "id",
          parentField: "parentId",
          expandAll: true,
        },
        // checkboxConfig: {
        //   labelField: "id",
        // },
        proxyConfig: {
          props: {
            message: "msg", // 设置保存成功后提示消息字段
          },
          ajax: {
            query: () => {
              // 模拟后台接口
              return new Promise((resolve) => {
                setTimeout(() => {
                  const list = [
                    {
                      id: 10000,
                      parentId: null,
                      odds: "FH2108310007",
                      name: "仓库2",
                      addr: "F1W1",
                      transform: "海运01",
                      getNums: 100,
                      diffNums: 20,
                    },
                    {
                      id: 10050,
                      parentId: null,
                      odds: "FH2108310007",
                      name: "仓库2",
                      addr: "F1W1",
                      transform: "海运01",
                      getNums: 100,
                      diffNums: 20,
                    },
                    {
                      id: 24300,
                      parentId: 10050,
                      picture: "",
                      c_name: "MSKU-A",
                      c_odds: "fh210831007",
                      c_shop: "店铺1",
                      c_seedNums: "199",
                    },
                  ];
                  resolve(list);
                }, 500);
              });
            },
          },
        },
        columns: [
          { type: "checkbox", title: "", width: 60 },
          {
            field: "odds",
            title: "MSKU/FNSKU",
            width: 200,
            treeNode: true,
            slots: { default: "odds_default" },
          },
          {
            field: "name",
            title: "品名/SKU",
            slots: { default: "name_default" },
          },
          {
            field: "shop",
            title: "店铺",
            slots: { default: "shop_default" },
          },
          {
            field: "sendNums",
            title: "发货量",
            slots: { default: "sendNums_default" },
          },
          {
            field: "getNums",
            title: "关联签收量",
            slots: { default: "getNums_default" },
          },
          {
            field: "diffNums",
            title: "差异量",
            slots: { default: "diff_default" },
          },
          {
            field: "goodsOdds",
            title: "货件单号",
          },
          {
            field: "moveOdds",
            title: "调拨单号",
          },
          {
            field: "time",
            title: "时间",
          },
          {
            field: "edit",
            title: "操作",
          },
        ],
      },
      tableData: [
        {
          id: 10001,
          name: "Test1",
          role: "Develop",
          sex: "Man",
          age: 28,
          address: "test abc",
        },
        {
          id: 10002,
          name: "Test2",
          role: "Test",
          sex: "Women",
          age: 22,
          address: "Guangzhou",
        },
        {
          id: 10003,
          name: "Test3",
          role: "PM",
          sex: "Man",
          age: 32,
          address: "Shanghai",
        },
        {
          id: 10004,
          name: "Test4",
          role: "Designer",
          sex: "Women",
          age: 23,
          address: "test abc",
        },
        {
          id: 10005,
          name: "Test5",
          role: "Develop",
          sex: "Women",
          age: 30,
          address: "Shanghai",
        },
      ],
    };
  },
};
</script>
