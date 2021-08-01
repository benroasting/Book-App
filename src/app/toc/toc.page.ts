import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | Puppy Love",
      url: "/chapter1",
      pageNumber: "1"
    },
    {
      title: "Chapter 2 | Driving",
      url: "/chapter2",
      pageNumber: "2"
    },
    {
      title: "Chapter 3 | Just Keep Swimming",
      url: "/chapter3",
      pageNumber: "3"
    },
    {
      title: "Chapter 4 | Nap Time",
      url: "/chapter4",
      pageNumber: "4"
    },
    {
      title: "Chapter 5 | The Best Is Yet To Be",
      url: "/chapter5",
      pageNumber: "5"
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
