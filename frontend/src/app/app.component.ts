import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationsService } from './shared/services/locations.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
