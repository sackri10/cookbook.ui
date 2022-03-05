import { Injectable } from '@angular/core';
import { Recipe,Category, APIResponse } from '../models/Recipe.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env  } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CookbookService {
  
  constructor(private http:HttpClient) { }
   Recipes:Recipe[]= [{Id:1, RecipeTitle:'Title', RecipeDescription:'Description',Ingredients:'ing',CreatedOn: new Date(),
CreatedBy:'Kishore',UpdatedBy:'Kishore',UpdatedOn:new Date(),CategoryId:1 ,Category: {Id:1,CategoryName:'soup'}  },

{Id:2, RecipeTitle:'Title', RecipeDescription:'Description',Ingredients:'ing',CreatedOn: new Date(),
CreatedBy:'Kishore',UpdatedBy:'Kishore',UpdatedOn:new Date(),CategoryId:1 ,Category: {Id:1,CategoryName:'soup'}  },
{Id:2, RecipeTitle:'Title', RecipeDescription:'Description',Ingredients:'ing',CreatedOn: new Date(),
CreatedBy:'Kishore',UpdatedBy:'Kishore',UpdatedOn:new Date(),CategoryId:1 ,Category: {Id:1,CategoryName:'soup'}  }] ;

GetAllRecipes() :Observable<APIResponse<Recipe>>{
  return this.http.get<APIResponse<Recipe>>(`${env.BASE_URL}/api/cookbook`);
}

}
