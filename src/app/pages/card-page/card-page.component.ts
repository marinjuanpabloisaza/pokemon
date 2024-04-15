import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { typeColors } from '../../const/typescolor.type';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  standalone: true,
  imports: [ HttpClientModule ],
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {
  pokemonInfo: any = [];
  id: string = ''  ;
  colors: any = typeColors
  globalColor = '';


  constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ?? '';
      console.log('ID de la URL:',  this.id);
    });
    this.globalColor =  '#000000'
    this.pokemonQuery();

  }

  
  
  pokemonQuery() {
    console.log('this');
    this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`).subscribe((pokemonData: any) => {
      console.log('CardPageComponent => pokemonData:', pokemonData);
      this.pokemonInfo = {
        allInfo: pokemonData,
        name: pokemonData.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`,
        stats: pokemonData.stats,
        types: pokemonData.types.map((type: any) => ({
          name: type.type.name,
          color: this.colors[type.type.name] || '#000000' // Asignar color del tipo o negro si no se encuentra
        }))
      };
      const dataaa =  pokemonData;
      console.log('CardPageComponent => dataaa:', dataaa);
    });
  }
  

  more(): void {
  
    console.log(  this.pokemonInfo
    );
    
    }
}