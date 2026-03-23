import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MazenHaouari-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
   
  ) {
  }
  ngOnInit(): void {
  
    this.titleService.setTitle("Mazen Haouari");
    this.metaService.addTags([
      { name: 'keywords', content: 'Software Engineer' },
      { name: 'description', content: 'Third-year Software Engineering student at the Higher Institute of Computer Science.' },
    ]);
    
    AOS.init();
  }
}
