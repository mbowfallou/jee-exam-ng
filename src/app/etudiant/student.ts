export class Student {
    id: number;
    nom: string;
    prenom: string;
    adresse: string;
    email: string;
    password: string;
    etat: number;
    filiere_id: number;
    filiere_name: string;
  
    constructor(
      nom = "Nom",
      prenom = "Prenom",
      adresse = "Adresse...",
      email = "email@a.com",
      password = "password",
      etat = 0,
      filiere_id = 0,
      filiere_name = "nom filière"
    ) {
      this.nom = nom;
      this.prenom = prenom;
      this.adresse = adresse;
      this.email = email;
      this.password = password;
      this.etat = etat;
      this.filiere_id = filiere_id;
      filiere_name = filiere_name;
    }
  }
  