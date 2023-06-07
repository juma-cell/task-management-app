class Category < ActiveRecord::Base
    # Associations
    has_many :tasks
    
  end
  