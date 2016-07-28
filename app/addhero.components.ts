import {Component} from '@angular/core';

@Component({
	selector: 'add-hero',
	template:`
		<input #newHero 
			(keyup.enter)="addHero(newHero.value); newHero.value=''"
			(blur)="addHero(newHero.value); newHero.value=''">
		<button (click)="addHero(newHero.value)">Add</button>
		<ul><li *ngFor="let hero of heros">{{hero}}</li><ul>
		`
})
export class AddHeroComponent {
	heros = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
	addHero(newHero: string) {
		if(newHero) {
			this.heros.push(newHero);
		}
	}
}