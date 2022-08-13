<template>
  <div class="issue">
    <div class="issue__icon">
      <PinIcon
        v-if="type === 'issue'"
        class="issue__icon-pic issue__icon-pic--green"
      />
      <PullRequestIcon
        v-else
        class="issue__icon-pic issue__icon-pic--green"
      />
    </div>

    <div class="issue__info">
      <div class="issue__header">
        <a href="" class="issue__link">
          <h2 class="issue__title">
            {{ title }}
          </h2>
        </a>

        <ul
          v-if="labels"
          class="issue__labels"
        >
          <li
            v-for="label in labels"
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

    <div class="issue__commentaries">
      <button class="issue__commentaries-button">
        <div class="issue__commentaries-icon">
          <CommentIcon class="issue__commentaries-icon-pic" />
        </div>

        <div class="issue__commentaries-count">
          {{ comments }}
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
    CommentIcon,
  },

  props: {
    title: {
      type: String,
    },

    type: {
      type: String,
    },

    state: {
      type: String,
    },

    number: {
      type: Number,
    },

    createdAt: {
      type: String,
    },

    author: {
      type: String,
    },

    labels: {
      type: Array,
      default: false,
    },

    comments: {
      type: Number,
    },
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

    setInfo() {
      return `#${this.number} ${this.state}ed ${this.getTime(this.createdAt)} by ${this.author}`;
    },
  },
}
</script>

