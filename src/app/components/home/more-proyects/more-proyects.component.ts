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
      Title:'Site-e-commerce-Symfony-5.4',
      Description:"Ce projet est développé avec le framework Symfony. Il vise à aider les utilisateurs à acheter des produits. ",
      Technologies:['Symfony 5.4','Php','CSS','Html',"Javascript","Twig"],
      ghLink:'https://github.com/mazenhaouari40/Site-e-commerce-Symfony-5.4-',
     demoLink:'https://drive.google.com/file/d/1_w-o4q5aXqD9is6ygXu-mprezHtr6U_n/view'
    },

    
    /*{
     
      Title:'techivo',
      Description:'techivo site  (personal practicing on design)',
      Technologies:['Html','Css','Animation','Responsive'],
      ghLink:'https://github.com/loayeldin/techivo',
      demoLink:'https://techivo.netlify.app/'
    },

    {
     
      Title:'devolio',
      Description:'devolio site  (personal practicing on design)',
      Technologies:['Html','Css','Animation','Responsive'],
      ghLink:'https://github.com/loayeldin/devolio',
      demoLink:'https://devoliooo.netlify.app/'
    },*/

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
