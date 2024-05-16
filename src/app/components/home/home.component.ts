import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items:any = [] ;
  constructor(private dbService:DbService) {}

  ngOnInit() {
    this.dbService.getAllSnippet().then( (data: any) => {
      this.items = data ;
    }) ;    
  }
}
