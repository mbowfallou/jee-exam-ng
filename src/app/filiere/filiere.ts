export class Filiere {
    id: number;
    name: string;

    constructor(
        name: string = 'Entrer un nom de filière...'
    ){
        this.name = name;
    }
}