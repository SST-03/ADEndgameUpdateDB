import { SetPurchasableMechanicState } from "./game-mechanics";

class ExpansionPackState extends SetPurchasableMechanicState {
  get currency() {
    return Currency.antimatter;
  }

  get set() {
    return player.endgame.expansionPacks.boughtPacks;
  }

  get areUnlocked() {
    return player.endgame.expansionPacks.areUnlocked
  }
}

export const ExpansionPack = mapGameDataToObject(
  GameDatabase.endgame.packs,
  config => new ExpansionPackState(config)
);
