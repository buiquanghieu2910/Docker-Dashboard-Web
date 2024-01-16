<template>
  <el-card>
    <h3>Prune Volumes</h3>
    <p>
      Volumes can be used by one or more containers, and take up space on the
      Docker host. Volumes are never removed automatically, because to do so
      could destroy data.
    </p>

    <el-button type="danger" plain>
      <IconSystem type="bxs-trash" before />
      Proceed to Prune volume
    </el-button>
  </el-card>
</template>

<script>
import IconSystem from "@/components/IconSystem.vue";
export default {
  components: { IconSystem },
};
</script>
