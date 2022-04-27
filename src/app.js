import Character from './character';
import Team from './team';

const RedTeam = new Team();
const player1 = new Character('Tom');
const player2 = new Character('Sam');

console.log(RedTeam.add(player1));
console.log(RedTeam.add(player2));
console.log(RedTeam.addAll(player1, player2));
console.log(RedTeam.toArray());
console.log(RedTeam.members.size);
