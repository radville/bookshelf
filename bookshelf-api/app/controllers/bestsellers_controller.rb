require 'rest-client'
# require 'json'

class BestsellersController < ApplicationController
    def genres
        genres_response = RestClient.get("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=#{ENV['NYTIMES_KEY']}")

        genres_data = JSON.parse(genres_response)["results"]

        @genres = genres_data.map do |genre|
            # slug = genre["list_name"].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
            # response = RestClient.get "https://api.nytimes.com/svc/books/v3/lists/current/#{slug}.json?api-key=#{ENV['NYTIMES_KEY']}"
            # genres = {genre: {name: genre["list_name"], books: response["results"]["books"]} }
            genre["list_name"]
        end.sort

        render json: @genres
    end

    def show
        response = RestClient.get("https://api.nytimes.com/svc/books/v3/lists/current/#{params[:slug]}.json?api-key=#{ENV['NYTIMES_KEY']}")
        @books = JSON.parse(response)["books"]
        
        render json: @books
    end

end