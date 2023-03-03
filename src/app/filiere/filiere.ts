export class Filiere {
    id: number;
    name: string;
    modules: string[];

    constructor(
        name: string = 'Entrer un nom de filière...',
        modules: string[] = ["A", "B"]
    ){
        this.name = name;
        this.modules = modules;
    }
}