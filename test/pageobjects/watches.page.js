const  Page= require ('./page');

class WatchesPage extends Page{
    

    get infoTitle(){

        return $('.b-title');
    }

     open()
     {
        //super.open('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
        browser.url('https://www.ebay.com/b/Wristwatches/31387/bn_2408451');
     } 
    }

module.exports = new WatchesPage();