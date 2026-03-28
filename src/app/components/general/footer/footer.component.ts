import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, query, stagger, animate, style, transition } from '@angular/animations'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations:[
    trigger("animateFooter", [
      transition(":enter", [
        query("*", [
          style({opacity: 0, transform: "translateY(100%)"}),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({opacity:1, transform: "none"})
            )
          ])
        ])
      ])
    ])
  ]
})
export class FooterComponent implements OnInit {
lastUpdate: string = '';

  constructor(
  ) { }


ngOnInit() {
  fetch('https://api.github.com/repos/mazenhaouari40/Portfolio-mazen/commits')
    .then(res => res.json())
    .then(data => {
      const date = data[0].commit.committer.date;
      this.lastUpdate = new Date(date).toLocaleDateString('fr-FR');
    });
}

}
