class Task < ActiveRecord::Base
    # Associations
    belongs_to :category
    has_many :comments
    has_many :attachments
  
  end
  