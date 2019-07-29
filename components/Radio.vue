<template>
  <v-layout
    row
    wrap
  >
    <div
      :key="i+'cc'"
      class="pl-5 mt-4 mb-4"
      style="flex-grow:1;width:20%;"
      v-for="(value,i) in item.labels"
    >
      <input
        :name="item.name"
        :value="value.value"
        style="transform: scale(3);"
        type="radio"
      />
    </div>
    <template v-if="item.labels.length > 5">
      <div
        :key="i"
        style="flex-grow:1;width:20%;"
        v-for="(value,i) in 5 - (item.labels.length % 5)"
      ></div>
    </template>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  }
}
</script>

<style>
.VuetifyLogo {
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
