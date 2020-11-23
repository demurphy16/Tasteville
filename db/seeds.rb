# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Food.destroy_all
Flavor.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

puts "#{User.count} users created"

@flavor1 = Flavor.create!(name: 'sweet')
@flavor2 = Flavor.create!(name: 'salty')
@flavor3 = Flavor.create!(name: 'sour')
@flavor4 = Flavor.create!(name: 'bitter')
@flavor5 = Flavor.create!(name: 'umami')

puts "#{Flavor.count} flavors created"

@food1 = Food.create!(name: 'pizza', flavors: [@flavor1, @flavor2, @flavor5], user: @admin)

@food2 = Food.create!(name: 'sushi', user: @admin)

@food2.flavors.push(@flavor2, @flavor5)
# @food2.flavors << @flavor2
# @food2.flavors << @flavor5

@flavor1.foods.create!(name: 'ice cream', user: @admin)

puts "#{Food.count} foods created"
