import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  articles:Array<any>;
  sources:Array<any>;

  constructor(private newsapi:NewsApiService){
    console.log('app component constructor called');
  }

  ngOnInit() {

    this.newsapi.initArticles().subscribe(data => this.articles = data['articles']);
    this.newsapi.initSources().subscribe(data=> this.sources = data['sources']);
    }

  searchArticles(source){
    console.log("source: " +source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.articles = data['articles']);
  }

}