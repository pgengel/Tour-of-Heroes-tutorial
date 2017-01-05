import { Component, OnInit } from '@angular/core';
import { HeroForm } from './hero-form';

@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {
 
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

}