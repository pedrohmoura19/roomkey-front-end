import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationsService } from './shared/services/locations.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(locationsService: LocationsService) {
    locationsService.getLocations().subscribe((data) => {
      console.log("DATA",data); 
    })
  }

  title = 'frontend';
}
