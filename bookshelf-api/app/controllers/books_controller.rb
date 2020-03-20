require "pry"
class BooksController < ApplicationController
    # before_action :authenticate_user!
    before_action :set_book, only: [:update, :destroy]
    before_action :set_user

    # GET /books
    def index
      if logged_in?
        @books = @user.books
        render json: @books
      else
        render json: Book.all
      end
    end
  
    # POST /books
    def create
      binding.pry
      if user.books.include?()
      @book = @user.books.create(book_params)

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

      def set_user
        @user = User.find(session[:user_id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def book_params
        params.require(:book).permit(:title, :author, :description, :amazon_product_url, :book_image, :id, :read, :created_at, :updated_at)
      end
end
