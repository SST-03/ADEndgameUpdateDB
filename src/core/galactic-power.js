export class GalacticPowerState {
  constructor(config) {
    this.config = config;
  }

  get unlockGP() {
    return this.config.galacticPower;
  }

  get isUnlocked() {
    return Currency.galacticPower.gte(this.unlockGP);
  }
}
export const GalacticPower = mapGameDataToObject(
  GameDatabase.endgame.galacticPowers,
  config => (config.isBaseResource
    ? new GalacticPowerState(config)
    : new GalacticPowerState(config))
);
