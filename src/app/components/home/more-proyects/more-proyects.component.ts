import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-more-proyects',
  templateUrl: './more-proyects.component.html',
  styleUrls: ['./more-proyects.component.scss']
})
export class MoreProyectsComponent implements OnInit {
  Projects = [
    {
      Title:'Système de Gestion ResearchHub (2025)',
      Description:'Cette Plateforme Permet la soumission d’articles, la gestion du processus d’évaluation par les pairs, l’authentification sécurisée des utilisateurs et propose des fonctionnalités avancées de recherche. Dispose d’une architecture backend , avec intégration de PostgreSQL et exposition de services via des API REST.',
      Technologies:['Spring boot','Java','PostgreSql','api rest','Angular'],
      ghLink:'https://github.com/MedAzizL/ResearchHub-Management-System',
          }
    ,{
      Title:'Jeu de Pendu (2024)',
      Description:'Ce jeu a ete developpe par Mazen haouari et yazid dhouioui en utilisant langage c. Elle contient deux version graphique et console. Vous trouverez ci-dessous plus de détails en cliquant sur le lien ci-dessus.',
      Technologies:['Langage C','Html','Css','javaScript' ,'WebAssembly'],
      ghLink:'https://github.com/mazenhaouari40/Mini-projet-Algorithmique',
      demoLink:'https://yaziddh.github.io/Hangman-Game-in-Fr/'
    },
    {
      Title:"Projet d'Ordonnancement des Processus (2023)",
      Description:"Ce projet a pour objectif d'implémenter différents algorithmes d'ordonnancement des processus dans un système d'exploitation. Ces algorithmes sont : FIFO, SRT,Round Robin,Priorite. Vous trouverez ci-dessous plus de détails en cliquant sur le lien ci-dessus.",
      Technologies:['Langage C','MakeFile'],
      ghLink:'https://github.com/mazenhaouari40/Projet_ordonnancement-des-processus',
     demoLink:''
    },
    {
      Title:"Reservation-Hoteliere (2022)",
      Description:"Ce projet est une application web permettant aux utilisateurs de réserver des chambres et de gérer leurs réservations.",
      Technologies:['Php','CSS','Html',"Hack"],
      ghLink:'https://github.com/mazenhaouari40/Reservation-Hoteliere',
     demoLink:'https://drive.google.com/file/d/10643yAEgzhtdw8SItvRSqJhQTUgwd9_6/view?usp=sharing'
    },
    {
      Title:'Taquin (2022)',
      Description:"This project was created by Mazen Haouari and Mahmoud Derbel. We developed four algorithms Breadth-First Search,Depth-First Search, Limited Depth-First Search, A* Algorithm. The goal is to take input and output as global variables, displaying the number of explored and closed nodes in a graphical interface. My focus was on algorithm development, while my friend concentrated on the graphical aspects. ",
      Technologies:['Python'],
      ghLink:'https://github.com/mazenhaouari40/Jeu_de_Taquin',
     demoLink:''
    },

  ]
  constructor(
    private router: Router,
    ) { }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
    redirect(route: string, event) {
      const id = event.target.id;
      if(id=='demoLink' || id=='ghLink'){
        return
      }
      window.open(route, '_blank');
    }

}
