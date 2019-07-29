<template>
  <v-card class="mb-1 abc test">
    <v-layout>
      <v-flex
        style="padding:20px;"
        xs3
      >{{ item.text}}</v-flex>
      <v-flex xs9>
        <Radio :item="item"/>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Radio from '~/components/Radio.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    Radio
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
