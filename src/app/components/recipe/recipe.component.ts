import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe.model';
import { CookbookService } from 'src/app/services/cookbook.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private cookbookService:CookbookService) { }
   Recipes:Recipe[]=[];
  ngOnInit(): void {
    this.GetAllRecipies();
  }
  GetAllRecipies(){
     this.cookbookService.GetAllRecipes().subscribe(x=> {
      this.Recipes = x.results;
    });
  }

}
