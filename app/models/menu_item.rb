class MenuItem < ApplicationRecord
  validates_presence_of :name
  belongs_to :menu
end
