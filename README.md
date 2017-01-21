# Daily Documentary
Daily Documentary lists the current top 25 documentaries as voted on by reddit.com/r/documentaries and provides more information on each including year, plot, and rating.

After watching a doc, mark it as watched to add it to the timeline. See a doc but don't have the time to watch it now? Save it to your watchlist for later.

## Getting Started

### Prerequisites
* You must install Bundler using the info [here](http://bundler.io/).

### Installation
* Fork & clone repo
* Run `bundle install` in Terminal

### Usage
* Type `rails s` in Terminal to run Rails server
* Visit `locahost:3000` in browser to interact with web app

## Contributing
All back-end code should adhere to the [Rails Style Guide](https://github.com/bbatsov/rails-style-guide). All front-end code should adhere to the [John Papa's Angular Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#single-responsibility).

Please ensure your pull request adheres to the following guidelines:
* Search previous suggestions before making a new one
* Suggested READMEs should be beautiful or stand out in some way.
* Make an individual pull request for each suggestion.
* New categories, or improvements to the existing categorization are welcome.
* Keep descriptions short and simple, but descriptive.
* Start the description with a capital and end with a full stop/period.
* Check your spelling and grammar.
* Make sure your text editor is set to remove trailing whitespace.

Thank you for your suggestions!

## Future Work
* Pass through details from index -> details and save those to DB
* Implement Devise/oAuth to allow users to have their own profiles
* Switch movie details API from oIMDB to MovieDB for realiability and speed increase
* Create logo for web app & README.md

## License

MIT License | Copyright (c) 2016 [Steve Frost](http://steveafrost.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
