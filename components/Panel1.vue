<template>
  <div>
    <section>abc</section>
    <v-card class="mb-4 abc test">
      <RadioRow
        :item="{
          name: 'basic.test.test',
          text: 'abcaaaaaaa',
          labels: [
          { name: 'ラジオ1', value: 'a' },
          { name: 'ラジオ1', value: 'a' }
          ]
        }"
      />
      <RadioRow
        :item="{
          name: 'basic.test.test',
          text: 'abcaabbbb',
          labels: [{ name: 'ラジオ1', value: 'a' }]
        }"
      />
    </v-card>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import RadioRow from '~/components/RadioRow.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    RadioRow
  },
  props: {
    items: {
      type: Array,
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
