import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <div style="text-align:justify" class="content">
    <h1 style="text-align:center">Bienvenue sur notre plateforme d'éducation en ligne "{{title}}" !</h1>

    <div>
        Notre site est dédié à la gestion des étudiants, des professeurs, des filières, des modules et des classes.
        Nous sommes fiers de vous offrir une solution complète pour aider à améliorer l'enseignement et la communication
        entre les différents acteurs de l'éducation.
    </div>
    <div>
        Les professeurs peuvent facilement ajouter des documents de cours aux modules qui leur sont assignés, tandis que
        les étudiants peuvent consulter, télécharger et vérifier leurs modules en toute simplicité.
    </div>
    <div>
        Notre objectif est de rendre l'apprentissage en ligne plus facile, plus accessible et plus pratique pour tous.
        Nous sommes convaincus que notre plateforme aidera les éducateurs et les étudiants à atteindre leurs objectifs
        académiques.
    </div>
    <div>
        N'hésitez pas à explorer notre site pour en savoir plus sur toutes les fonctionnalités que nous avons à offrir.
        Si vous avez des questions ou des commentaires, n'hésitez pas à nous contacter à tout moment. Nous sommes là
        pour vous aider à réussir!
    </div>
</div>
  `,
  styles: [
  ]
})
export class WelcomeComponent {
  title: string | undefined = 'School Support';
}
