class CategoriesController < ApplicationController
  get "/categories" do
    categories= Category.all
    categories.to_json()
 end

 post '/addcategories' do 
  name=params[:name]
  color=params[:color]


  categories = Category.create(name: name, color:color)
  if categories
   feedback = {:achievement=> "Category added"}
   feedback.to_json()
  else
   feedback = {:failure=> "Try again please"}
   feedback.to_json()
   end
  
end
  
end
  