<template>
  <LayoutSystem>
    <div class="container-component">
      <div class="top justify-content-center">
        <el-button-group>
          <el-button
            :type="isSelected.group ? 'info' : ''"
            @click="handleClickTab('group')"
          >
            <IconSystem type="bxs-purchase-tag" before /> Group</el-button
          >
          <el-button
            :type="isSelected.all ? 'info' : ''"
            @click="handleClickTab('all')"
          >
            All</el-button
          >
          <el-button
            :type="isSelected.active ? 'info' : ''"
            @click="handleClickTab('active')"
          >
            Active</el-button
          >
          <el-button
            :type="isSelected.stopped ? 'info' : ''"
            @click="handleClickTab('stopped')"
          >
            Stopped</el-button
          >
        </el-button-group>
      </div>

      <div class="data-table">
        <template v-if="!isSelected.group">
          <AllData :data="dataViews" :status="status" />
        </template>
      </div>
    </div>
  </LayoutSystem>
</template>

<script>
import LayoutSystem from "@/components/LayoutSystem.vue";
import IconSystem from "@/components/IconSystem.vue";
import AllData from "@/components/containers/AllData.vue";
import { getContainers, getConsumptionStats } from "@/utils/Slices";
import { loadingPage } from "@/utils/Common";

export default {
  components: {
    LayoutSystem,
    IconSystem,
    AllData,
  },

  data() {
    return {
      isSelected: {
        all: false,
        active: false,
        stopped: false,
        group: false,
      },
      keyQuery: "type",
      status: null,
      dataViews: [],
    };
  },

  watch: {
    async status() {
      await this.getContainers(this.status);
    },
  },

  mounted() {
    const keyTabs = Object.keys(this.isSelected);

    var valueKey = Object.prototype.hasOwnProperty.call(
      this.$route.query,
      this.keyQuery
    )
      ? keyTabs.includes(this.$route.query[this.keyQuery])
        ? this.$route.query[this.keyQuery]
        : keyTabs[0]
      : keyTabs[0];

    this.pushParamSearchToUrl(this.keyQuery, valueKey);
    this.handleClickTab(valueKey);
    this.status = valueKey;
  },

  methods: {
    handleClickTab(type) {
      for (const key of Object.keys(this.isSelected)) {
        if (key == type) {
          this.pushParamSearchToUrl(this.keyQuery, key);
          this.isSelected[key] = true;
          this.status = key;
        } else {
          this.isSelected[key] = false;
        }
      }
    },

    /**
     * Push Param Search To Url
     * @param {*} key
     * @param {*} value
     */
    pushParamSearchToUrl(key, value) {
      const queryParams = { ...this.$route.query, [key]: value };
      this.$router.push({ query: queryParams });
    },

    /**
     * Get data containers
     * @param {*} status
     */
    async getContainers(status) {
      loadingPage(true);
      const resp = await getContainers(status);
      let stats = [];
      if (status == "all" || status == "active") {
        stats = await getConsumptionStats();
      }

      const updatedContainers = resp.map((container) => {
        const stat = stats.find((s) => container.short_id === s.id) || {};
        return {
          ...container,
          stats: {
            cpu_percentage: stat.cpu_percentage || "",
            memory_usage: stat.memory_usage || "",
            network_io: stat.network_io || "",
          },
        };
      });
      loadingPage(false);
      this.dataViews = updatedContainers;
    },
  },
};
</script>

<style>
.container-component * {
  padding: 0.25em;
}

.container-component .top {
  background-color: #ededed;
}

.data-table {
  margin-top: 0.75em;
}
</style>
