import { TextService } from '../services/text.service';
import { Component, OnInit } from "@angular/core";
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {

  constructor(private textService:TextService) {}
  ngOnInit(): void {
  }
  title = "SEO CLIENT";


}
