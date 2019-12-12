class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :description
      t.string :amazon_product_url
      t.string :book_image
      t.boolean :read, default: false

      t.timestamps
    end
  end
end
