class SessionController < ApplicationController


    post "/login" do
        name=params[:name]
        password=params[:password]
    
       
        if(name.present? &&  password.present? )
            user = User.find_by(name: name)

            if (user && user.authenticate(password))
                session[:user_id] = user.id

                message = {:success=> "Login success"}
                message.to_json

            else
                status 401
                message = {:error=> "Wrong name or password"}
                message.to_json
            end
          
        
        else
            status 406
            message = {:error=> "All values are required"}
            message.to_json()
        end
    end


    # Logout
    post "/logout" do
       session.delete :user_id
       message = {:success=> "Logout success"}
       message.to_json()
    end 
end