<template>
  <el-card>
    <h3>Prune Containers</h3>
    <p>
      When you stop a container, it is not automatically removed unless you
      started it with the --rm flag. A stopped container’s writable layers still
      take up disk space.
    </p>

    <el-button type="danger" plain>
      <IconSystem type="bxs-trash" before />
      Proceed to Prune container
    </el-button>
  </el-card>
</template>

<script>
import IconSystem from "@/components/IconSystem.vue";
export default {
  components: { IconSystem },
};
</script>
