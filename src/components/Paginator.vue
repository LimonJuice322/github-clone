<template>
  <div class="paginator">
    <ul class="paginator__list">
      <li class="paginator__item">
        <button
          class="paginator__link paginator__link--previous"
          :class="{'paginator__link--disabled': currentPage === 1}"
          :disabled="currentPage === 1"
          @click="selectPage(currentPage - 1)"
        >
          Previous
        </button>
      </li>

      <template v-for="page in totalPages">
        <li
          v-if="currentPage < 6 ? page <= 6 : page <= 2"
          :key="page"
          class="paginator__item"
        >
          <button
            class="paginator__link"
            :class="{'paginator__link--current': page === currentPage}"
            @click="selectPage(page)"
          >
            {{ page }}
          </button>
        </li>
      </template>

      <li
        v-if="currentPage >= 6"
        class="paginator__item"
      >
        <span class="paginator__link paginator__link--dots">
          ...
        </span>
      </li>

      <template v-for="page in totalPages">
        <li
          v-if="currentPage >= 6 && currentPage <= totalPages - 6 ? page > currentPage - 3 && page < currentPage + 3 : 0"
          :key="page"
          class="paginator__item"
        >
          <button
            class="paginator__link"
            :class="{'paginator__link--current': page === currentPage}"
            @click="selectPage(page)"
          >
            {{ page }}
          </button>
        </li>
      </template>

      <li
        v-if="currentPage <= totalPages - 6"
        class="paginator__item"
      >
        <span class="paginator__link paginator__link--dots">
          ...
        </span>
      </li>

      <template v-for="page in totalPages">
        <li
          v-if="currentPage > totalPages - 6 ? page >= totalPages - 6 : page >= totalPages - 1"
          :key="page"
          class="paginator__item"
        >
          <button
            class="paginator__link"
            :class="{'paginator__link--current': page === currentPage}"
            @click="selectPage(page)"
          >
            {{ page }}
          </button>
        </li>
      </template>

      <li class="paginator__item">
        <button
          class="paginator__link paginator__link--next"
          :class="{'paginator__link--disabled': currentPage === totalPages}"
          :disabled="currentPage === totalPages"
          @click="selectPage(currentPage + 1)"
        >
          Next
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Paginator',

  props: {
    currentPage: {
      type: Number,
      default: 1,
    },

    totalPages: {
      type: Number,
      default: 1,
    },
  },

  computed: {

  },

  methods: {
    selectPage(number) {
      this.$emit('get-current-page', number);
    }
  }
}
</script>
