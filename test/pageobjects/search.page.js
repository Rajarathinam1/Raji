const Page = require ('./page'); 

class SearchPage extends Page {

    get searchInput() {

        return $('#gh-ac');
    }

    get searchBtn() {
        return $('#gh-btn');

    }

    get catogory() {
        return $('#gh-cat option:nth-child(1)');
    }

    open() {
        super.open('https://www.ebay.com/');
        }
}

module.exports = new SearchPage();