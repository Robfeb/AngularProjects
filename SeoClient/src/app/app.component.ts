import { TextService } from './../services/text.service';
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {

  constructor(private textService:TextService) {}
  ngOnInit(): void {
  }
  title = "SEO CLIENT";


}
