export class Memo {
  constructor(
    id,
    title,
    content,
    imageUri,
    backgroundColor,
    roomId,
    writerId,
    readerId,
    createdAt,
    updatedAt
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.imageUri = imageUri;
    this.backgroundColor = backgroundColor;
    this.roomId = roomId;
    this.writerId = writerId;
    this.readerId = readerId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
