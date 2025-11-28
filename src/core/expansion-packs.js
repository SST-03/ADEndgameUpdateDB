import { SetPurchasableMechanicState } from "./game-mechanics";

class ExpansionPackState extends SetPurchasableMechanicState {
  get currency() {
    return Currency.antimatter;
  }

  get set() {
    return player.endgame.expansionPacks.boughtPacks;
  }

  get unlockAM() {
    return this.config.cost;
  }

  get isUnlocked() {
    return this.isBought || Currency.antimatter.gte(this.unlockAM);
  }
}

export const ExpansionPack = mapGameDataToObject(
  GameDatabase.endgame.packs,
  config => new ExpansionPackState(config)
);

export const ExpansionPacks = {
  get areUnlocked() {
    return player.endgame.expansionPacks.areUnlocked;
  },
  get nextPack() {
    return ExpansionPack.all.find(x => !x.isUnlocked);
  },
  get nextPackUnlockAM() {
    return this.nextPack?.unlockAM;
  }
}
