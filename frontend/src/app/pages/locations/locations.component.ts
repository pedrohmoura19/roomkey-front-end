import { Component, inject, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { LocationsService } from "../../shared/services/locations.service"; // Adjust the path as needed

@Component
({
    selector: 'locations-component',
    imports: [MatCardModule],
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit
{
    locations: any[] = [];

    private locationsService = inject(LocationsService);

    ngOnInit(): void {
        this.getLocations();
    }

    getLocations(): void {
        this.locationsService.getLocations().subscribe(locations => this.locations = locations);
        console.log(this.locations);
    }
}
