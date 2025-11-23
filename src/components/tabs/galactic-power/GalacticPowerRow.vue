<script>

export default {
  name: "GalacticPowerRow",
  props: {
    getPower: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      isUnlocked: false
    };
  },
  computed: {
    power() {
      return this.getPower();
    },
    config() {
      return this.power.config;
    },
    description() {
      return this.config.description;
    },
    reward() {
      const reward = this.config.effect;
      return typeof reward === "function" ? reward() : reward;
    },
    title() {
      return `Galactic Power ${this.config.id}:`;
    }
  },
  methods: {
    update() {
      this.isUnlocked = this.power.isUnlocked;
    }
  }
};
</script>

<template>
  <div>
    {{ title }} {{ description }}.
    <br>
    Currently: {{ reward }}
  </div>
</template>

<style scoped>

</style>
