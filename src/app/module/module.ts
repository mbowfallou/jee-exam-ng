export class Module {
    id: number;
    name: string;
    jours: string;
    credit: number;
    quantum: number;
    docs: string;
    professor_id: number;
    filiere_id: number;
    professor_name: string;
    filiere_name: string;

    constructor(
        name: string = 'Entrer un nom de module...',
        jours= "jours",
        credit= 0,
        quantum= 0,
        docs= "path",
        professor_id= 0,
        filiere_id= 0,
        professor_name = "",
        filiere_name = ""
    ){
        this.name = name;
        this.jours = jours,
        this.credit = credit,
        this.quantum = quantum,
        this.docs = docs,
        this.professor_id = professor_id,
        this.filiere_id = filiere_id,
        professor_name = professor_name,
        filiere_name = filiere_name
    }
}
