<template>
  <t-space direction="vertical">
    <t-collapse v-model="currentItem" expand-mutex @Change="handlePanelChange">
      <t-collapse-panel value="0" header="这是一个折叠标题">
        这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
      </t-collapse-panel>
      <t-collapse-panel value="1">
        <template #header>这是一个折叠标题</template>
        <template #default
        >这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。</template
        >
      </t-collapse-panel>
      <t-collapse-panel value="2">
        <template #header>这是一个折叠标题</template>
        这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
      </t-collapse-panel>
      <t-collapse-panel value="3" header="这是一个折叠标题">
        这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
      </t-collapse-panel>
    </t-collapse>
    <div style="margin-top: 10px">当前展开项：{{ currentItem }}</div>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      currentItem: [],
    };
  },
  methods: {
    handlePanelChange(val) {
      console.log(val);
    },
  },
};
</script>
