<template>
  <el-card>
    <h3>Prune Images</h3>
    <p>
      This action will allow you to clean up unused images. It cleans up
      dangling images. A dangling image is one that is not tagged and is not
      referenced by any container.
    </p>

    <el-button type="danger" plain>
      <IconSystem type="bxs-trash" before />
      Proceed to Prune image
    </el-button>
  </el-card>
</template>

<script>
import IconSystem from "@/components/IconSystem.vue";
export default {
  components: { IconSystem },
};
</script>
