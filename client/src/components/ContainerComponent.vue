<template>
  <div class="container-component">
    <div class="top justify-content-center">
      <el-button-group>
        <el-button>
          <IconSystem type="bxs-purchase-tag" before /> Group</el-button
        >
        <el-button> All</el-button>
        <el-button> Active</el-button>
        <el-button> Stopped</el-button>
      </el-button-group>
    </div>

    <div class="data-table">
      <el-table style="width: 100%">
        <el-table-column prop="status" label="Status" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="id" label="ID" />
        <el-table-column prop="cpu" label="CPU" />
        <el-table-column prop="ram" label="RAM" />
        <el-table-column prop="network" label="Network" />
      </el-table>
    </div>
  </div>
</template>

<script>
import IconSystem from "@/components/IconSystem.vue";

export default {
  components: {
    IconSystem,
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
