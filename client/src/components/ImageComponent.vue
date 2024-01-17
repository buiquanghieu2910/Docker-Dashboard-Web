<template>
  <div class="data-table">
    <el-table style="width: 100%" :data="data">
      <el-table-column prop="repository" label="Name" width="500" />

      <el-table-column prop="id" label="ID" width="400" />

      <el-table-column prop="size" label="Size" width="300">
        <template #default="scope">
          <el-tag class="mx-1" effect="dark" round type="info">
            {{ scope.row.size }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="created_since" label="Created" width="300">
        <template #default="scope">
          <el-tag class="mx-1" effect="dark" round type="success">
            {{ scope.row.created_since }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
