<script>

export default {
  name: "GalacticPowerTab",
  data() {
    return {
      nextPow: 0
    };
  },
  computed: {
    powers() {
      return GalacticPowers.all;
    },
    nextAtDisplay() {
      const first = this.nextPow?.id === 1;
      const next = GalacticPower.nextPowUnlockGP;

      if (first) return `The first Galactic Power unlocks at ${format(next)} Galactic Power.`;
      return next === undefined
        ? "All Galactic Powers unlocked"
        : `Next Galactic Power unlocks at ${format(next)} Galactic Power.`;
    }
  },
  methods: {
    update() {
      this.nextPow = GalacticPower.nextPow;
    },
    isPowerVisible() {
      return GalacticPowers.id.isUnlocked;
    }
  }
};
</script>

<template>
  <div>
    <div>
      Rows coming soon...
    </div>
    <div>{{ nextAtDisplay }}</div>
  </div>
</template>

<style scoped>

</style>
