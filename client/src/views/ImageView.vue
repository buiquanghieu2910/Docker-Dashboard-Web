<template>
  <LayoutSystem> <ImageComponent :data="dataViews" /> </LayoutSystem>
</template>

<script>
import LayoutSystem from "@/components/LayoutSystem.vue";
import ImageComponent from "@/components/ImageComponent.vue";
import { getImages } from "@/utils/Slices";
import { loadingPage } from "@/utils/Common";

export default {
  components: {
    LayoutSystem,
    ImageComponent,
  },

  data() {
    return {
      dataViews: [],
    };
  },

  mounted() {
    loadingPage(true);
    setTimeout(async () => {
      this.dataViews = await getImages();
      loadingPage(false);
    }, 1500);
  },
};
</script>
