class Book < ApplicationRecord
    has_many :userbooks
    has_many :users, through: :userbooks
end
