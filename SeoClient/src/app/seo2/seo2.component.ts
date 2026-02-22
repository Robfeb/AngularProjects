import { Component, OnInit } from '@angular/core';
import { TextService } from 'src/services/text.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seo2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seo2.component.html',
  styleUrls: ['./seo2.component.css']
})
export class Seo2Component implements OnInit {

  loadAPI: Promise<any>;


  postList: String[] = [];
  constructor(private textService:TextService) {
  //   this.loadAPI = new Promise((resolve) => {
  //     this.loadScript();
  //     resolve(true);
  // });
  }
  ngOnInit(): void {
    this.postList=this.textService.getPostList(5,10);
  }
  // public loadScript() {
  //   var isFound = false;
  //   var scripts = document.getElementsByTagName("script")
  //   for (var i = 0; i < scripts.length; ++i) {
  //       if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
  //           isFound = true;
  //       }
  //   }

  //   if (!isFound) {
  //       var dynamicScripts = ["https://seoservice.azurewebsites.net/api/Seo?token=123456"];

  //       for (var i = 0; i < dynamicScripts.length; i++) {
  //           let node = document.createElement('script');
  //           node.src = dynamicScripts [i];
  //           node.type = 'text/html';
  //           node.async = false;
  //           node.charset = 'utf-8';
  //           document.getElementsByTagName('head')[0].appendChild(node);
  //       }

  //   }
//}
}
