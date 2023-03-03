export class Professor {
    id: number;
    nom: string;
    prenom: string;
    adresse: string;
    email: string;
    password: string;
    etat: number;
  
    constructor(
      nom = "Nom",
      prenom = "Prenom",
      adresse = "Adresse...",
      email = "email@a.com",
      password = "password",
      etat = 1
    ) {
      this.nom = nom;
      this.prenom = prenom;
      this.adresse = adresse;
      this.email = email;
      this.password = password;
      this.etat = etat;
    }
  }
  