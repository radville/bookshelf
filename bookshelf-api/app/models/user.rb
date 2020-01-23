class User < ApplicationRecord
    has_secure_password

    has_many :userbooks
    has_many :books, through: :userbooks

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 4 }
    validates :email, presence: true
    validates :email, uniqueness: truevalidates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
end
