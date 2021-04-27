import { Component, OnInit } from "@angular/core";
import { TextService } from "src/services/text.service";

@Component({
  selector: "app-seo1",
  templateUrl: "./seo1.component.html",
  styleUrls: ["./seo1.component.css"],
})
export class Seo1Component implements OnInit {
  postList: String[] = [];
  htmlCode: String;
  constructor(private textService: TextService) {}
  ngOnInit(): void {
    this.postList = this.textService.getPostList(0, 5);

    (async () => {
      const response = await fetch(
        "https://seoservice.azurewebsites.net/api/Seo?token=123456"
      );
      const text = await response.text();
      console.log(text);
      this.htmlCode = text;
    })();
  }
}
