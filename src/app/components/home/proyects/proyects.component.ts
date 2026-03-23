import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  Projects = [
// quiz app
    {
      Title:'Quiz App (Mars 2025)',
      Description:`Me and Yazid developed a quiz application using Flutter and Firebase. The host creates a quiz by specifying the quiz title and questions. For each question, he defines the title, between three and five options, and the time limit.
      After creating the quiz, the host has two buttons: Play and Update for each quiz. In addition, when he clicks the Start button, a quiz code is generated, and many players can join the quiz session using this code.
      `,
      Technologies:['Flutter', 'Firebase'],
      ghLink:'https://github.com/mazenhaouari40/Quiz_App_--Flutter',
      demoLink:'https://quiz-app-5cc5c.web.app/',
      imgs:[
        './../../../assets/images/Quiz-flutter/quiz1.png',
        './../../../assets/images/Quiz-flutter/quiz2.png', 
        './../../../assets/images/Quiz-flutter/quiz3.png',
        './../../../assets/images/Quiz-flutter/quiz4.png', 
        './../../../assets/images/Quiz-flutter/quiz5.png',
        './../../../assets/images/Quiz-flutter/quiz6.png',
        './../../../assets/images/Quiz-flutter/quiz7.png',
        './../../../assets/images/Quiz-flutter/quiz8.png',
        ],
     // video: "https://drive.google.com/file/d/1Mrag2F93vqJIwS74HqDETbv01sAcn5l9/view?usp=drive_link",
    },
// Stage d'ete hrmaps

    {
      Title:'Absence Management (2024)',
      Description:'This web application is designed to streamline the process of managing absences. It provides an intuitive platform for collaborators to request absences and for managers to process and manage these requests efficiently in real time using WebSockets.',
      Technologies:['Angular', 'Spring Boot','MySQL','css','java','web socket'],
      ghLink:'https://github.com/mazenhaouari40/Front-end-Internship-2024---angular',
      video: "https://drive.google.com/file/d/13GEp0mbcqd95j613xTYJB711sSK9VfCV/view",
      imgs:[
        './../../../assets/images/Stage_hrmaps/hrmaps1.png',
        './../../../assets/images/Stage_hrmaps/hrmaps2.png',
        './../../../assets/images/Stage_hrmaps/hrmaps3.png',
        './../../../assets/images/Stage_hrmaps/hrmaps4.png',

        ],
    },

// Taquin
    {
      Title:'Taquin (2022)',
      Description:`This project was created by Mazen Haouari and Mahmoud Derbel. We developed four algorithms Breadth-First Search,Depth-First Search, Limited Depth-First Search, A* Algorithm.
      The goal is to take input and output as global variables, displaying the number of explored and closed nodes in a graphical interface. My focus was on algorithm development, while my friend concentrated on the graphical aspects.`,
      Technologies:['Python'],
      ghLink:'https://github.com/mazenhaouari40/Jeu_de_Taquin',
      imgs:[
        './../../../assets/images/Taquin/taquin.png',
        ],
     
    },
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 900,
    items: 1,
    autoplay: true,
    autoplayTimeout:3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;


  constructor(
  ) { }

  ngOnInit(): void {



  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',    
  });
}

}
