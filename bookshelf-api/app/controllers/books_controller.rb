require "pry"
class BooksController < ApplicationController
    # before_action :authenticate_user!
    before_action :set_book, only: [:show, :update, :destroy]

    # GET /books
    def index
      if logged_in?
        books = current_user.books
        render json: books
      else
        render json: 
      end
    end
  
    # GET /books/1
    def show
      render status: 401,
      errors: ['Please log in']
    end
  
    # POST /books
    def create
      @book = current_user.books.create!(book_params)

      if @book.save
        render json: @book, status: :created, location: @book
      else
        render json: @book.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /books/1
    def update
      if @book.update(book_params)
        render json: @book
      else
        render json: @book.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /books/1
    def destroy
      @book.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_book
        @book = Book.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def book_params
        params.require(:book).permit(:title, :author, :description, :amazon_product_url, :book_image, :id, :read, :created_at, :updated_at)
      end
end
