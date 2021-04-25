import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TextService {
  postList: String[] = [];
  Lorem: String[] = [
    "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    "urna consequat felis vehicula class ultricies mollis dictumst",
    "aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus",
    "consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti",
    "vehicula nisl litora tellus ligula porttitor metus.",
    "Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit",
    "euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante",
    "eleifend lectus nullam dapibus netus feugiat curae curabitur est ad.",
    "Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst",
    "orci penatibus mauris eros etiam praesent erat volutpat posuere hac.",
    "Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor",
    "etiam ultricies proin quisque lectus sociis id tristique",
    "integer phasellus taciti pretium adipiscing tortor sagittis ligula.",
  ];
  constructor() {}
  ShowLoremIpsun(init:number,end:number) {
    this.postList=[];
    for (let index = init; index < end; index++) {
      this.postList.push(this.Lorem[index]);
    }
  }
  public getPostList(init:number,end:number): String[] {
    this.ShowLoremIpsun(init,end);
    return this.postList;
  }
}
