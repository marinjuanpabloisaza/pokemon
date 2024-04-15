import { Component, OnInit, inject } from '@angular/core';
import { users } from '../../../data/users';
import { TableComponent } from '../../components/table/table.component';
import { CardComponent } from '../../components/card/card.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { typeColors } from '../../const/typescolor.type'
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent, CardComponent, SidebarComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  httpClient = inject(HttpClient);
  
  colors: any = typeColors
  data = [{
    city: 'medellin'
  }];
  con: number = 0;
  list: any = [];
  user = users.usuarios;

  ngOnInit(): void {
    this.pokemonQuery();
    console.log(this.colors);

  }

  more(): void {
    
    this.con = this.con + 20
    this.pokemonQuery();
  console.log(  this.list
  );

  }

  

  pokemonQuery() {
    this.httpClient.get(`https://pokeapi.co/api/v2/pokemon?offset=${this.con}&limit=20`).pipe(
      switchMap((response: any) => {
        if (response.results) {
          return Promise.all(response.results.map((pokemon: any) => {
            const segments = pokemon.url.split('/');
            const pokemonId = segments[segments.length - 2];
            return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).toPromise();
          }));
        } else {
          return [];
        }
      })
    ).subscribe((pokemonData: any[]) => {
      this.list = pokemonData.map((data: any) => ({
        allInfo: data,
        name: data.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
        stats: data.stats,
        types: data.types.map((type: any) => ({
          name: type.type.name,
          color: this.colors[type.type.name] || '#000000' // Asignar color del tipo o negro si no se encuentra
        })) // Obtener los tipos de Pokémon
      }));
  
      // Llamamos a la función para obtener los colores de los Pokémon
    });
  }
  
  

  
}
