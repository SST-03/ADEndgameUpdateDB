<script>
export default {
  name: "EtherealTab",
  data() {
    return {
      etherealPower: new Decimal(),
      etherealPowerPerSecond: new Decimal(),
      cosmicSector: 0,
      nextSectorAt: new Decimal(),
      sectorBoost: new Decimal()
    };
  },
  methods: {
    update() {
      this.etherealPower.copyFrom(Currency.etherealPower.value);
      this.etherealPowerPerSecond.copyFrom(getEtherealPowerGainPerSecond());
      this.cosmicSector = Ethereal.cosmicSector;
      this.nextSectorAt.copyFrom(Ethereal.sectorThreshold);
      this.sectorBoost.copyFrom(Ethereal.sectorBoost);
    }
  }
};
</script>

<template>
  <div>
    <div>
      <span class="c-normal-ethereal-text">You have </span>
      <span class="c-really-cool-ethereal-text">{{ format(etherealPower, 2, 2) }}</span>
      <span class="c-normal-ethereal-text"> Ethereal Power. </span>
      <span class="c-really-cool-ethereal-text">+{{ format(etherealPowerPerSecond, 2, 2) }}/s</span>
    </div>
    <div>
      <span class="c-normal-ethereal-text">
        Ethereal Power income is based on Celestial Points, Singularities, and Reality Machine amounts.
      </span>
      <span v-if="false">It is also based on Galactic Power amounts above {{ format(DC.NUMMAX, 2, 2) }}.</span>
    </div>
    <div>
      <span class="c-normal-ethereal-text">Your Cosmic Sector is </span>
      <span class="c-really-cool-ethereal-text">{{ formatInt(cosmicSector) }}</span>
      <span class="c-normal-ethereal-text">, which is currently multiplying all Celestial Dimensions and delaying
      the Celestial Matter Softcap by </span>
      <span class="c-really-cool-ethereal-text">{{ format(sectorBoost, 2, 2) }}</span><span class="c-normal-ethereal-text">.</span>
    </div>
    <div>
      <span class="c-normal-ethereal-text">You will ascend into the next Cosmic Sector at </span>
      <span class="c-really-cool-ethereal-text">{{ format(nextSectorAt, 2, 2) }}</span>
      <span class="c-normal-ethereal-text"> Ethereal Power.</span>
    </div>
  </div>
</template>

<style scoped>
.c-normal-ethereal-text {
  font-size: 2rem;
  color: #0000c0;
}

.c-really-cool-ethereal-text {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(#000000, #0000c0);
  background-clip: text;
  text-shadow: 0 0 1.5rem #0000ff;

  -webkit-text-fill-color: transparent;
}
</style>
