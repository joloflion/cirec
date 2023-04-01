import { Component } from '@angular/core';

@Component({
  selector: 'app-domaines',
  templateUrl: './domaines.component.html',
  styleUrls: ['./domaines.component.scss']
})
export class DomainesComponent {

  domaines = [
  {
    title: "Stratégie, Tableau de bord stratégique",
    icon: "fas fa-chart-line"
  },
  {
    title: "Management de Projet, Suivi-évaluation de Projet/ Programmes",
    icon: "fa fa-cubes"
  },
  {
    title: "Gestion des marchés publics, Passation de marchés",
    icon: "fas fa-poll"
  },
  {
    title: "Gestion Administrative et Financière",
    icon: "fas fa-yen-sign"
  },
  {
    title: "Gestion des Ressources Humaines, développement Personnel,Leadership",
    icon:"fas fa-briefcase"
  },
  {
    title: "Finance, Comptabilité, Actions commerciales, Audit, Fiscalité et Logistique",
    icon: "fas fa-project-diagram"
  }
  ]

}
