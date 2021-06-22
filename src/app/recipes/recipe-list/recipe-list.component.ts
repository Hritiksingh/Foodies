import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe','This is a sample recipe','https://www.sciencenewsforstudents.org/wp-content/uploads/2020/11/1030_teen_brain_food_choices.jpg'),
    new Recipe('Test Recipe','This is a sample recipe','https://www.sciencenewsforstudents.org/wp-content/uploads/2020/11/1030_teen_brain_food_choices.jpg'),
    new Recipe('Test Recipe','This is a sample recipe','https://www.sciencenewsforstudents.org/wp-content/uploads/2020/11/1030_teen_brain_food_choices.jpg')
  ];    //Array of Object of type class Recipe.

  constructor() { }

  ngOnInit(): void {
  }

}
