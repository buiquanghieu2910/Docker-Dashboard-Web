<template>
  <div>
    <el-table :data="data" style="width: 100%">
      <el-table-column prop="status" label="Status" width="150">
        <template #default="scope">
          <el-switch v-model="scope.row.state.running"
        /></template>
      </el-table-column>

      <el-table-column prop="name" label="Name" width="300"/>
      
      <el-table-column prop="short_id" label="ID" width="200"/>

      <el-table-column label="Created At" width="200">
        <template #default="scope">
          <el-tag class="mx-1" effect="dark" round type="success">
            {{ formatTimeAgo(scope.row.created) }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column label="CPU" v-if="status != 'stopped'" width="200">
        <template #default="scope">
          <el-tag
            v-if="scope.row.stats.cpu_percentage"
            class="mx-1"
            effect="dark"
            round
            type="danger"
          >
            {{ scope.row.stats.cpu_percentage }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column label="RAM" v-if="status != 'stopped'" width="200">
        <template #default="scope">
          <el-tag
            v-if="scope.row.stats.memory_usage"
            class="mx-1"
            effect="dark"
            round
            type="info"
          >
            {{ scope.row.stats.memory_usage }}
          </el-tag>
        </template></el-table-column
      >

      <el-table-column label="Network" v-if="status != 'stopped'" width="200">
        <template #default="scope">
          <el-tag
            v-if="scope.row.stats.network_io"
            class="mx-1"
            effect="dark"
            round
            type="warning"
          >
            {{ scope.row.stats.network_io }}
          </el-tag>
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
