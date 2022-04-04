import { HttpClient } from '@angular/common/http';
import { PokeModel } from './../models/poke-model';
import { AbstractService } from './abstract.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService extends AbstractService <PokeModel>{


  constructor(httpClient:HttpClient) { 
    super(httpClient,"https://pokeapi.co/api/v2/ability");
  }
}
