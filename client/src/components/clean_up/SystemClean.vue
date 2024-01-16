<template>
  <el-card>
    <h3>Prune System</h3>
    <p>
      Remove all unused containers, networks, images (both dangling and
      unreferenced), and optionally, volumes.
    </p>

    <el-button type="danger" plain>
      <IconSystem type="bxs-trash" before />
      Proceed to Prune system
    </el-button>
  </el-card>
</template>

<script>
import IconSystem from "@/components/IconSystem.vue";
export default {
  components: { IconSystem },
};
</script>
