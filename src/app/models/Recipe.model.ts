export interface Recipe {
    Id:number;
    RecipeTitle: string;
    RecipeDescription: string;
    Ingredients: string;
    CategoryId: number;
    CreatedOn: Date;
    CreatedBy: string;
    UpdatedOn: Date;
    UpdatedBy: string ;
    Category: Category;    
  }
  export interface Category {
    Id: number;
    CategoryName:string;

  }
  export interface APIResponse<T> {
    results: Array<T>;
}
