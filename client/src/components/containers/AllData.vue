<template>
  <div>
    <el-table :data="data" style="width: 100%">
      <el-table-column prop="status" label="Status">
        <template #default="scope">
          <el-switch v-model="scope.row.state.running"
        /></template>
      </el-table-column>
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="short_id" label="ID" />
      <el-table-column label="Created At">
        <template #default="scope">
          {{ formatTimeAgo(scope.row.created) }}
        </template>
      </el-table-column>
      <el-table-column label="CPU" v-if="status != 'stopped'">
        <template #default="scope">
          {{ scope.row.stats.cpu_percentage }}
        </template>
      </el-table-column>
      <el-table-column label="RAM" v-if="status != 'stopped'">
        <template #default="scope">
          {{ scope.row.stats.memory_usage }}
        </template></el-table-column
      >
      <el-table-column label="Network" v-if="status != 'stopped'">
        <template #default="scope">
          {{ scope.row.stats.network_io }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { timeAgo } from "@/utils/Common";
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },

    status: {
      type: String,
      default: "",
    },
  },

  methods: {
    formatTimeAgo(time) {
      return timeAgo(time);
    },
  },
};
</script>
