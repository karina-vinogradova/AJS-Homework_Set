export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (!this.members.has(member)) {
      this.members.add(member);
    } else {
    //   console.log('This member in collection'); // Для проверки покрытия кода тестами
      throw new Error('This member in collection');
    }
  }

  addAll(...member) {
    const membersArr = [...member];

    for (const el of membersArr) {
      this.members.add(el);
    }

    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }
}
