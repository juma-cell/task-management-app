class Comment < ActiveRecord::Base
    # Associations
    belongs_to :user
    belongs_to :task
  
   
  end
  