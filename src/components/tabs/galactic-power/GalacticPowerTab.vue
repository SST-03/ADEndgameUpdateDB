<script>
import GalacticPowerRow from "./GalacticPowerRow";

export default {
  name: "GalacticPowerTab",
  components: {
    GalacticPowerRow
  },
  data() {
    return {
      galacticPower: new Decimal(),
      nextPow: 0
    };
  },
  computed: {
    powers() {
      return GalacticPowers.all;
    },
    rows() {
      return Math.ceil(this.milestones.length);
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
      this.galacticPower.copyFrom(Currency.galacticPower.value.floor());
      this.nextPow = GalacticPower.nextPow;
    },
    getPower(row, column) {
      return () => this.powers[(row - 1) + column - 1];
    }
  }
};
</script>

<template>
  <div class="l-eternity-milestone-grid">
    <div>You have {{ quantify("Galactic Power", galacticPower, 3) }}.</div>
    <div
      v-for="row in rows"
      :key="row"
      class="l-eternity-milestone-grid__row"
    >
      <GalacticPowerRow
        v-for="column in 1"
        :key="row + column"
        :get-milestone="getPower(row, column)"
        class="l-eternity-milestone-grid__cell"
      />
    </div>
    <div>{{ nextAtDisplay }}</div>
  </div>
</template>

<style scoped>

</style>
