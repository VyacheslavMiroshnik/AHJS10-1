import GameSavingLoader from '../js/GameSavingLoader';
import GameSaving from '../js/GameSave';

test('Promise test', async () => {
  const data = await GameSavingLoader.load();
  const expectedGameSave = new GameSaving({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
  expect(data).toEqual(expectedGameSave);
});
