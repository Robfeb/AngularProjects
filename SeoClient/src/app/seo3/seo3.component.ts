import { Component, OnInit } from '@angular/core';
import { TextService } from 'src/services/text.service';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-seo3',
  templateUrl: './seo3.component.html',
  styleUrls: ['./seo3.component.css']
})
export class Seo3Component implements OnInit {

  postList: String[] = [];
  private data:any = [];
  constructor(private textService:TextService,private http: HttpClient) {}
  ngOnInit(): void {
    this.postList=this.textService.getPostList(10,13);
    this.getData();
  }
  getData(){
    const url ='https://seoservice.azurewebsites.net/api/Seo?token=123456'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(res);
    })
  }

}
