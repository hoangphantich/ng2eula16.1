import { Component } from '@angular/core';

@Component({
    selector: 'boo-admin',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <div>My First Component</div>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = `Acme Product Management`;
}