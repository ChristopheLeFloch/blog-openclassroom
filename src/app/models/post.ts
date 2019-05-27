export class Post {
  title: string;
  content: string;
  loveIts: number;
  noLoveIts: number;
  createdAt: string;

  constructor() {
      this.createdAt = new Date().toJSON();
  }
}
