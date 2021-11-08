<template>
  <div>
    <div>
      著作权归 {{ name }} 所有。<br />
      链接：<a :href="location">{{ location }}</a>
    </div>
    <div v-html="html" />
  </div>
</template>

<script>
import { author } from "/.vuepress/config/";
export default {
  props: ["html"],
  data() {
    return {
      name: author.name,
    };
  },
  created() {
    this.location = window.location;
  },
};
</script>
