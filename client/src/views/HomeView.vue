<template>
  <el-container>
    <el-main>
      <div class="justify-content-center">
        <el-button-group>
          <el-button
            size="large"
            :type="isSelected.container ? 'primary' : ''"
            @click="handleClickTab('container')"
          >
            <IconSystem type="bxs-layer" before />Containers</el-button
          >
          <el-button
            size="large"
            :type="isSelected.image ? 'primary' : ''"
            @click="handleClickTab('image')"
          >
            <IconSystem type="bxs-cube" before />Images</el-button
          >
          <el-button
            size="large"
            :type="isSelected.volume ? 'primary' : ''"
            @click="handleClickTab('volume')"
          >
            <IconSystem type="bxs-server" before />Volumes</el-button
          >
          <el-button
            size="large"
            :type="isSelected.clean ? 'primary' : ''"
            @click="handleClickTab('clean')"
          >
            <IconSystem type="bxs-shield-minus" before />Clean-up</el-button
          >
        </el-button-group>
      </div>

      <div style="margin-top: 1.5em">
        <template v-if="isSelected.container">
          <ContainerComponent />
        </template>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import IconSystem from "@/components/IconSystem.vue";
import ContainerComponent from "@/components/ContainerComponent.vue";

export default {
  components: {
    IconSystem,
    ContainerComponent,
  },

  data() {
    return {
      isSelected: {
        container: false,
        image: false,
        volume: false,
        clean: false,
      },
    };
  },

  methods: {
    handleClickTab(type) {
      for (const key of Object.keys(this.isSelected)) {
        if (key == type) {
          this.isSelected[key] = true;
        } else {
          this.isSelected[key] = false;
        }
      }
    },
  },
};
</script>
