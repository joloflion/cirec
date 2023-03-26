import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.scss']
})
export class FormationDetailsComponent implements OnInit {



  formation: any ;

  formations = [{
    id: '1',
    title: "Logiciel saari comptable / sage 100°",
    category: "Saari",
    coach: 'Sidi yade',
    date: '03 Jan, 2023',
    img: "assets/img/blog-1.jpg",
    wow: '0.3s',
    items: [
    "Initiation au logiciel comptable",
    "Paramétrage de base",
    "Création du fichier comptable",
    "Traitement comptable des opérations réalisées par l'entreprise"
  ],
},
  {
    id: '2',
    title: "Tenue de comptable",
    category: "Contabilité",
    coach: 'Sidi yade',
    date: '03 Jan, 2023',
    img: "assets/img/blog-2.jpg",
    items: [
      "Dépouillemment des pièces comptables",
      "Classement des pièces comptables",
      "Enregistrement des pièces comptables",
      "Analyse des comptes et lettrage",
      "Rapprochement bancaire",
      "Traitement des salaires"
    ]
  },
  {
    id: '3',
    title: "Déclaration sociales",
    coach: 'Sidi yade',
    date: '03 Jan, 2023',
    category: "Déclaration",
    img: "assets/img/blog-3.jpg",
    items: [
      "IPRES",
      "CSS"
    ]
  }]

  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.formation =this.getFormationById(p['id']);
      console.log(p['id'])
    })
  }

  getFormationById(id: string){
    return this.formations.find(f => f.id === id)
  }

}
