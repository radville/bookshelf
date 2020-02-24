require 'rest-client'
require 'pry'

class BestsellersController < ApplicationController
    def genres
        binding.pry
        genres_response = RestClient.get("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=#{ENV['NYTIMES_KEY']}")

        genres_data = JSON.parse(genres_response)["results"]

        @genres = genres_data.map do |genre|
            genre["list_name"]
        end.sort

        render json: @genres
    end
    
    def show
        response = RestClient.get("https://api.nytimes.com/svc/books/v3/lists/current/#{params[:genre]}.json?api-key=#{ENV['NYTIMES_KEY']}")
        @books = JSON.parse(response)["results"]["books"]
        
        render json: @books
    end

end