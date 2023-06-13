import {Component} from "@angular/core";

@Component({
    selector:'app-grupos',
    template:`
    <h1>Hola Grupos UTL</h1>
    <form>
        <label>Numero:</label>
        <input type="text" name="x" value="">
        <button class="btn btn-primary">Calcular</button>
    </form>
    `
})
export class NamesGupos{
    constructor(){}
}
