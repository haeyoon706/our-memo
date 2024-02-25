export class Room {
  constructor(id, userList, memoList, userLimit, managerId, createdAt) {
    this.id = id;
    this.userList = userList;
    this.memoList = memoList;
    this.userLimit = userLimit;
    this.managerId = managerId;
    this.createdAt = createdAt;
  }
}
