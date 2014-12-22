class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.string :author
      t.string :url
      t.string :publisher
      t.integer :current_page
      t.integer :total_pages
      t.date :start_date
      t.date :due_date
      t.integer :daily_pace
      t.boolean :in_progress
      t.text :notes
      t.integer :itemId

      t.timestamps
    end
  end
end
