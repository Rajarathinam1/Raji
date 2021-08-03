//import searchPage from '../pageobjects/search.page';
const SearchPage = require ('../pageobjects/search.page');
describe('Ebay product search' ,() => {
    it ('should open the main url and verify the title',() =>{
       SearchPage.open();
       expect(browser).toHaveTitle(
           'Electronics, Cars, Fashion, Collectibles & More | eBay'
           );     
        });

it ('Should search for the Product and Verify the Search Text Value', () => {
    
  SearchPage.searchInput.addValue('laptop');
  SearchPage.searchBtn.click();  
    
  expect(SearchPage.searchInput).toHaveValue('laptop');
     }); 

it ('should redirect to a new page and verify the title', () => {
expect(browser).toHaveTitle('laptop | eBay');

});

it ('should update the search catogory' , () => {

expect(SearchPage.catogory).toHaveText('PC Laptops & Netbooks');

});

});