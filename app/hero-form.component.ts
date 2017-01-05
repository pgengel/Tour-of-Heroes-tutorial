import { Component, OnInit } from '@angular/core';
import { HeroForm } from './hero-form';

@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html',
    styleUrls: ['hero-form.component.css']
})
export class HeroFormComponent {
 
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    model = new HeroForm(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    
    submitted = false;
    onSubmit() { this.submitted = true; }
    
    newHero() {
        this.model = new HeroForm(42,'','', '');
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

}