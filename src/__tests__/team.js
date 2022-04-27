import Character from '../character';
import Team from '../team';

const player1 = new Character('Num 7');
const player2 = new Character('Num 9');
const player3 = new Character('Num 11');
const player4 = new Character('Num 32');

const testTeam = new Team();

test('get error if the member in collection', () => {
  testTeam.add(player1);
  expect(() => testTeam.add(player1)).toThrowError('This member in collection');
});

test('add in collection one time', () => {
  testTeam.add(player1);
  testTeam.addAll(player1, player2, player3, player4);
  expect(testTeam.members.size).toBe(4);
});

test('convert a set to array', () => {
  expect(Array.isArray(testTeam.toArray())).toBe(true);
});
