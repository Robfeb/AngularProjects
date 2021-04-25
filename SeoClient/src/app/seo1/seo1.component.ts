import { Component, OnInit } from '@angular/core';
import { TextService } from 'src/services/text.service';

@Component({
  selector: 'app-seo1',
  templateUrl: './seo1.component.html',
  styleUrls: ['./seo1.component.css']
})
export class Seo1Component implements OnInit {
  postList: String[] = [];
  constructor(private textService:TextService) {}
  ngOnInit(): void {
    this.postList=this.textService.getPostList(0,5);
  }

}
