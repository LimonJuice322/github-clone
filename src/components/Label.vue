<template>
  <span
    :style="colors"
    class="label"
  >
    {{ name }}
  </span>
</template>

<script>
import colorBrightness from '@/helpers/colorBrightness';

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

      if (colorBrightness(this.color, 128)) {
        color = 'color: #000000;'
      }

      return [color, backgroundColor].join(' ');
    }
  },
}
</script>
