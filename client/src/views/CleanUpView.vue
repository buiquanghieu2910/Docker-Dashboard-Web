<template>
  <LayoutSystem>
    <div class="clean-up-view">
      <div class="top justify-content-center">
        <el-button-group>
          <el-button
            :type="isPrune.container ? 'info' : ''"
            @click="handleClickTab('container')"
          >
            Prune Containers
          </el-button>
          <el-button
            :type="isPrune.image ? 'info' : ''"
            @click="handleClickTab('image')"
          >
            Prune Images
          </el-button>
          <el-button
            :type="isPrune.volume ? 'info' : ''"
            @click="handleClickTab('volume')"
          >
            Prune Volumes
          </el-button>
          <el-button
            :type="isPrune.system ? 'info' : ''"
            @click="handleClickTab('system')"
          >
            Prune System
          </el-button>
        </el-button-group>
      </div>

      <div class="content">
        <template v-if="isPrune.container">
          <ContainerClean />
        </template>
        <template v-else-if="isPrune.image">
          <ImageClean />
        </template>
        <template v-else-if="isPrune.volume">
          <VolumeClean />
        </template>
        <template v-else-if="isPrune.system">
          <SystemClean />
        </template>
      </div>
    </div>
  </LayoutSystem>
</template>

<script>
import LayoutSystem from "@/components/LayoutSystem.vue";
import ContainerClean from "@/components/clean_up/ContainerClean.vue";
import ImageClean from "@/components/clean_up/ImageClean.vue";
import VolumeClean from "@/components/clean_up/VolumeClean.vue";
import SystemClean from "@/components/clean_up/SystemClean.vue";

export default {
  components: {
    LayoutSystem,
    ContainerClean,
    ImageClean,
    VolumeClean,
    SystemClean,
  },

  data() {
    return {
      isPrune: {
        container: false,
        image: false,
        volume: false,
        system: false,
      },
      keyQuery: "prune",
    };
  },

  mounted() {
    const keyTabs = Object.keys(this.isPrune);

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
  },

  methods: {
    handleClickTab(type) {
      for (const key of Object.keys(this.isPrune)) {
        if (key == type) {
          this.pushParamSearchToUrl(this.keyQuery, key);
          this.isPrune[key] = true;
        } else {
          this.isPrune[key] = false;
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
  },
};
</script>

<style>
.clean-up-view .top {
  background-color: #ededed;
  padding: 0.5em;
}

.clean-up-view .content {
  margin-top: 1.5em;
}
</style>
