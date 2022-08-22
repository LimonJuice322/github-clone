<template>
  <div class="issue">
    <div class="issue__icon">
      <template v-if="data.state === 'open'">
        <PinIcon
          v-if="type === 'issue'"
          class="issue__icon-pic issue__icon-pic--green"
        />
        <PullRequestDraftIcon
          v-else-if="data.draft"
          class="issue__icon-pic issue__icon-pic--gray"
        />
        <PullRequestIcon
          v-else
          class="issue__icon-pic issue__icon-pic--green"
        />
      </template>

      <template v-else>
        <template v-if="type === 'issue'">
          <PinCompleteIcon
            v-if="data.state_reason === 'completed'"
            class="issue__icon-pic issue__icon-pic--blue"
          />
          <PinCancelIcon
            v-if="data.state_reason === 'not_planned'"
            class="issue__icon-pic issue__icon-pic--gray"
          />
        </template>

        <template v-else>
          <PullRequestMergedIcon
            v-if="data.pull_request.merged_at"
            class="issue__icon-pic issue__icon-pic--blue"
          />
          <PullRequestClosedIcon
            v-else
            class="issue__icon-pic issue__icon-pic--red"
          />
        </template>
      </template>
    </div>

    <div class="issue__info">
      <div class="issue__header">
        <a href="" class="issue__link">
          <h2 class="issue__title">
            {{ data.title }}
          </h2>
        </a>

        <ul
          v-if="data.labels"
          class="issue__labels"
        >
          <li
            v-for="label in data.labels"
            class="issue__labels-item"
          >
            <Label
              class="issue__label"
              :color="label.color"
              :name="label.name"
            />
          </li>
        </ul>
      </div>

      <p class="issue__text">
        {{ setInfo() }}
      </p>
    </div>

    <div
      v-if="data.comments"
      class="issue__commentaries"
    >
      <button class="issue__commentaries-button">
        <div class="issue__commentaries-icon">
          <CommentIcon class="issue__commentaries-icon-pic" />
        </div>

        <div class="issue__commentaries-count">
          {{ data.comments }}
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import Label from '@/components/Label';
import PinIcon from '@/assets/icons/pin.svg';
import PinCancelIcon from '@/assets/icons/pin-cancel.svg';
import PinCompleteIcon from '@/assets/icons/pin-complete.svg';
import PullRequestIcon from '@/assets/icons/pull-request.svg';
import PullRequestDraftIcon from '@/assets/icons/pull-request-draft.svg';
import PullRequestClosedIcon from '@/assets/icons/pull-request-closed.svg';
import PullRequestMergedIcon from '@/assets/icons/pull-request-merged.svg';
import CommentIcon from '@/assets/icons/comment.svg';
import moment from 'moment';

const currentDate = moment(new Date());

export default {
  name: 'Issue',

  components: {
    Label,
    PinIcon,
    PinCancelIcon,
    PinCompleteIcon,
    PullRequestIcon,
    PullRequestDraftIcon,
    PullRequestClosedIcon,
    PullRequestMergedIcon,
    CommentIcon,
  },

  props: {
    data: {
      type: Object,
      required: true,
    },

    type: {
      type: String,
    },
  },

  computed: {
    issueDate() {
      return this.data.state === 'open' ? this.data.created_at : this.data.closed_at;
    }
  },

  methods: {
    getTime(time) {
      const date = moment(time);

      if (date.year() !== currentDate.year()) {
        return date.format('DD MMM yyyy')
      }

      if (currentDate.diff(date, 'days') > 25) {
        return date.format('DD MMM')
      }

      return moment(time).fromNow();
    },

    setState() {
      return this.data.state === 'open' ? 'opened' : 'closed';
    },

    setInfo() {
      return `#${this.data.number} ${this.setState()} ${this.getTime(this.issueDate)} by ${this.data.user.login}`;
    },
  },
}
</script>

