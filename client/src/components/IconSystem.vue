<template>
  <i
    style="font-size: 15pt"
    class="bx"
    :class="{ [type]: type, before: before, after: after }"
  ></i>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
    },

    before: {
      type: Boolean,
      default: false,
    },

    after: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.before {
  margin-right: 0.75em;
}

.after {
  margin-left: 0.75em;
}
</style>
