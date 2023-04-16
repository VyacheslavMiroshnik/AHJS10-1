import read from './reader';
import json from './parser';
import GameSaving from './GameSave';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      read()
        .then((buffer) => json(buffer))
        .then((string) => resolve(new GameSaving(JSON.parse(string))));
    });
  }
}
