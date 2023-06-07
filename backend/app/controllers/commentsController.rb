class CommentsController < ApplicationController
  
  get "/comments" do
    comments = Comment.all
    comments.to_json(include: :user)
 end

  post '/addcomments' do 
    content=params[:content]

      comments = Comment.create(content: content)
    if comments
    feedback = {:achievement=> "comment added successfully"}
    feedback.to_json()
    else
    feedback = {:failure=> "What are you doing? Try again"}
    feedback.to_json()
    end
  end

  # deleting comments
  delete "/deletecomments/:id" do
    
    check_comment = Comment.exists?(id: params[:id] ) 
    if check_comment
      comment= Comment.find(params[:id])
      comment.destroy
      message= {:success=> "comment has been deleted successfully"}
      message.to_json
    else
      status 406
      message = {:error=> "The  comment  does not exist"}
      message.to_json
    end

  end

end

  