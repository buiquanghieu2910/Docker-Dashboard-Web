<template>
  <div>
    <el-table :data="data" style="width: 100%">
      <el-table-column prop="status" label="Status" width="150">
        <template #default="scope">
          <el-switch
            v-model="scope.row.state.running"
            @change="
              ($value) =>
                changeStatus(scope.row.short_id, $value ? 'start' : 'stop')
            "
        /></template>
      </el-table-column>

      <el-table-column label="Name" width="300">
        <template #default="scope">
          <span>{{ scope.row.name }}</span>
          <div>
            <el-button
              type="success"
              plain
              size="small"
              @click="changeStatus(scope.row.short_id, 'restart')"
              >Restart</el-button
            >
            <el-button
              type="warning"
              plain
              size="small"
              @click="getLogs(scope.row.short_id)"
              >Log</el-button
            >
            <el-button
              type="danger"
              plain
              size="small"
              :disabled="scope.row.state.running"
              >Delete</el-button
            >
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="short_id" label="ID" width="200" />

      <el-table-column label="Created At" width="200">
        <template #default="scope">
          <el-tag class="mx-1" effect="dark" round type="success">
            {{ formatTimeAgo(scope.row.created) }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column label="Last Started" width="200">
        <template #default="scope">
          <el-tag class="mx-1" effect="dark" round>
            {{ formatTimeAgo(scope.row.state.started_at) }}
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
  emits: ["change-status", "get-logs"],

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

    changeStatus(id, value) {
      this.$emit("change-status", { id, value });
    },

    getLogs(id) {
      this.$emit("get-logs", id);
    },
  },
};
</script>
