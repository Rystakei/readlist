# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Item.create(
    title: 'Introducing Elixir', 
    author: 'Simon St. Laurent',
    url: 'http://www.amazon.com/Introducing-Elixir-Getting-Functional-Programming/dp/1449369995',
    current_page: 10,
    total_pages: 210,
    in_progress: true,
    itemId: 0
)
Item.create(
    title: 'Async JavaScript',
    author: 'Trevor Burnham',
    url: 'http://www.amazon.com/Async-JavaScript-Responsive-Pragmatic-Express/dp/1937785270/ref=sr_1_1?s=books&ie=UTF8&qid=1419248389&sr=1-1&keywords=Async+JavaScript',
    current_page: 10,
    total_pages: 104,
    in_progress: false,
    itemId: 1
)

Item.create(
    title: 'HTML5 in Action',
    author: 'Rob Crowther',
    url: 'http://www.amazon.com/HTML5-Action-Rob-Crowther/dp/1617290491/ref=sr_1_1?s=books&ie=UTF8&qid=1419248662&sr=1-1&keywords=html5+in+action',
    current_page: 400,
    total_pages: 466,
    in_progress: false,
    itemId: 2
)