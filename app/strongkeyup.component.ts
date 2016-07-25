import{Component} from '@angular/core'

@Component({
	selector: 'strong-key-up-v1',
	template: `
		<input (keyup)='keyUp($event)'>
		<p>{{values}}</p>
		`
})

export class StrongKeyUpV1 {
	values = '';

	keyUp(event: KeyboardEvent) {
		this.values += (<HTMLInputElement>event.target).value + ' | ';
	}
}