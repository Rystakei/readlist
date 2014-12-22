# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141222113316) do

  create_table "items", force: true do |t|
    t.string   "title"
    t.string   "author"
    t.string   "url"
    t.string   "publisher"
    t.integer  "current_page"
    t.integer  "total_pages"
    t.date     "start_date"
    t.date     "due_date"
    t.integer  "daily_pace"
    t.boolean  "in_progress"
    t.text     "notes"
    t.integer  "itemId"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
