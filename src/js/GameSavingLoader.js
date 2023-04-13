import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      read()
        .then((buffer) => json(buffer))
        .then((string) => resolve(JSON.parse(string)));
    });
  }
}
