<template>
  <div class="board">
    <div class="board__header">
      <div class="board__meta">
        <button class="board__meta-button board__meta-button--active">
          <PinIcon class="board__meta-button-icon" /> {{ openedCount }} Open
        </button>

        <button class="board__meta-button">
          <CheckmarkIcon class="board__meta-button-icon" /> {{ closedCount }} Closed
        </button>
      </div>
    </div>

    <div class="board__body">
      <ul class="board__list">
        <li
          v-for="issue in issuesList"
          class="board__item"
        >
          <Issue
            :state="issue.state"
            :title="issue.title"
            :number="issue.number"
            :type="issue.pull_request ? 'pull-request' : 'issue'"
            :created-at="issue.created_at"
            :author="issue.user.login"
            :labels="issue.labels"
            :comments="issue.comments"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Issue from '@/components/Issue';
import PinIcon from '@/assets/icons/pin.svg';
import CheckmarkIcon from '@/assets/icons/checkmark.svg';

export default {
  name: 'Board',

  components: {
    Issue,
    PinIcon,
    CheckmarkIcon,
  },

  props: {
    issuesList: {
      type: Array,
    },

    openedCount: {
      type: Number,
    },

    closedCount: {
      type: Number,
    },
  },
}
</script>

