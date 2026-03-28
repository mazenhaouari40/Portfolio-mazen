import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

 Experiences: any[] = [
    {
      Tab: 'Sofrecom Tunisie',
      Title: 'Intern ',
      Date: ' July 2025 – August 2025',
      Description: [
        'As part of the Agilis project, a network connection request management solution, I developed a solicitation API to enable communication between the client and Orange, and I also implemented unit tests using PHPUnit on the controller and service layers.',
        'Keywords: PHPUnit, Oft, PHP, Swagger, Git, GitLab, Scrum, Jira'
      ],
      location: "Tunis, Tunisia"
    },
    { 
      Tab: 'HR Maps',
      Title: 'Intern',
      Date: 'July 2024 – August 2024',
      Description: [
        'Developed an admin interface for user and assignment management.',
        'built a leave management module with real-time submission and approval using WebSocket.',
        'Set up a CI/CD pipeline with Jenkins and deployed on Render.',
        'Keywords: WebSocket, Spring Boot, Jenkins, Git, GitHub, Java,Postman, REST API'
      ],
            location: "Tunis, Tunisia"

    },
    
    {
      Tab: 'OLUMYA TECHNOLOGIES',
      Title: 'Intern',
      Date: 'February 2023 – June 2023 ',
      Description: [
        'This project focused on API documentation, integration testing to ensure proper functionality, and performance testing to evaluate the robustness of the i-Audits application under different user loads.',
        'Keywords: Postman, Java, Spring Boot, JUnit, Gatling, Scala, Swagger, Scrum, REST API, GitLab'
      ],
    location: "Djerba, Tunisia"
    },
        {
      Tab: 'SOFTSQUARE IT',
      Title: 'Intern',
      Date: 'June 2022 – July 2022 ',
      Description: [
        'Developed an e-commerce web application allowing clients to browse and order products online.',
        'Keywords: PHP, Symfony 5.4, HTML, CSS, MySQL'
      ],
    location: "Djerba, Tunisia"

    }
 ];

 Education: any[] = [
    {
      Ecole: 'Higher Institute of Computer Science',
      Specialite: 'Software Development Engineering ',
      Date: ' 2023 – 2026',
    },
    { 
      Ecole: 'Higher Institute of Computer Science',
      Specialite: 'Bachelor of Computer Science',
      Date: '2020 – 2023',
    },
 ];


  technologies = [
  {
    name: 'Angular',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
  },
  {
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  },
  {
    name: 'Spring Boot',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    name: 'C++',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
  },
  {
    name: 'C',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
  }
];

  certificats = [
  {
    name: 'fsdsdf',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
  },
  
];

  active = 0
  
  constructor(
  ) { }

  ngOnInit(): void {
  }


}
