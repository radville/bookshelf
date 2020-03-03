# README

The Bookshelf web app allows users to browse books on the NYTimes Bestsellers list and add them to their list to read later. 

Created in Ruby 2.6.1, React 16.12.0, and Redux 4.0.4. 

Code for adding user authentication was adapted from Alejandro Sabogal, "React with Rails User Authentication", Medium. Nov. 11, 2019. https://medium.com/how-i-get-it/react-with-rails-user-authentication-8977e98762f2

### Installing

1. Clone this repo to your local machine with `https://github.com/radville/bookshelf` 

2. From the `bookshelf-api` folder, run `bundle install` in the terminal to add all gems from the Gemfile

3. Create and initialize the postgres database by running `rails db:create` and then `rails db:migrate`

4. Start the Rails API site by entering `rails s` in the terminal from the `bookshelf-api` folder.

5. From the `bookshelf-frontend` folder, run `npm install` in the terminal to download packages and dependencies.

6. Launch the frontend with `npm start` from the `bookshelf-frontend` folder

7. In the browser, go to `http://localhost:3001` to see the app.


## Built With

* [Ruby on Rails](https://rubyonrails.org/) - The web framework used to generate user booklist API
* [React](https://reactjs.org/) - The JavaScript library used to build frontend interface
* [Redux](https://redux.js.org/) - The state container used


## Contributing

1. Fork this repo

2. Clone the repo to your local machine with `https://github.com/radville/bookshelf`

3. Make your edits!

4. Create a new pull request


## Authors

* **Laura Radville** - *Initial work* - (https://github.com/radville/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details