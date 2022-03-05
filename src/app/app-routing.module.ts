import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './components/recipe/add-recipe/add-recipe.component';
import { RecipeComponent } from './components/recipe/recipe.component';

const routes: Routes = [{path:'home', component:RecipeComponent},{path:'', component:RecipeComponent},
{path:'addRecipe', component:AddRecipeComponent},
{path:'addCategory', component:AddRecipeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
