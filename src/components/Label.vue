<template>
  <span
    :style="colors"
    class="label"
  >
    {{ name }}
  </span>
</template>

<script>
const SPECIAL_COLORS = ['fbca04'];

export default {
  name: 'Label',

  props: {
    name: {
      type: String,
    },

    color: {
      type: String,
    },
  },

  computed: {
    colors() {
      let backgroundColor = `background-color: #${this.color};`;
      let color = 'color: #ffffff;';

      if (SPECIAL_COLORS.includes(this.color)) {
        color = 'color: #000000;'
      }

      return [color, backgroundColor].join(' ');
    }
  },
}
</script>
