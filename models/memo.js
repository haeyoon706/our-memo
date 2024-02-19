export class Memo {
  constructor(
    title,
    content,
    imageUri,
    backgroundColor,
    roomId,
    memoId,
    writerId,
    readId,
    createdAt,
    updatedAt
  ) {
    this.title = title;
    this.content = content;
    this.imageUri = imageUri;
    this.backgroundColor = backgroundColor;
    this.roomId = roomId;
    this.memoId = memoId;
    this.writerId = writerId;
    this.readId = readId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
