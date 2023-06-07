class UsersController < ApplicationController
  get "/users" do
    users = User.all
    users.to_json()
 end

  post '/addusers' do 
    name=params[:name]
    email=params[:email]
    password=params[:password]

    user = User.create(name: name, email:email, password:password)
    if user 
    feedback = {:achievement=> "user successfully created"}
    feedback.to_json()
    else
    feedback = {:failure=> "Try again please"}
    feedback.to_json()
    end
  
  end


    # Get current user
  get "/current_user" do
    user = User.find_by(id: session[:user_id])
    
    if user
        {:user => user}.to_json
    else
          message = {:error=> "Not logged in"}
          message.to_json
    end
  end




  
  end
  
  