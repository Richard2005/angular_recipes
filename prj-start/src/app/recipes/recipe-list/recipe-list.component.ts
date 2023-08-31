import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://www.aldi.com.au/fileadmin/_processed_/4/f/csm_1000936_ALN-8_REFRESH_KVB_RECIPES_DESKTOP_948x360_3__MAIN-MEALS__a7893e772b.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://www.aldi.com.au/fileadmin/_processed_/4/f/csm_1000936_ALN-8_REFRESH_KVB_RECIPES_DESKTOP_948x360_3__MAIN-MEALS__a7893e772b.jpg')

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
