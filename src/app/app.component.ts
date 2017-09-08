import { Component, OnInit } from "@angular/core";
import * as faker from "faker";
import { blogPostOptions, blogData } from "./services/blog";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = faker.name.title();

  blogList: Array<blogData> = [];

  blogOptions: blogPostOptions = {
    page: 1,
    per: 20,
    totalPage: 50
  };

  ngOnInit() {
    this.blogList = this.getBlogList();
  }

  getBlogList() {
    const data: Array<blogData> = [];
    for (let i = 0; i < this.blogOptions.per; i++) {
      data.push({
        avatar: faker.image.avatar(),
        title: faker.lorem.sentence(),
        author: faker.internet.userName(),
        date: faker.date.past().toString(),
        content: faker.lorem.paragraph(),
        description: faker.lorem.sentences(),
        views: faker.random.number(),
        image: faker.random.image()
      });
    }

    return data;
  }
}
