
const  WatchesPage = require ('../pageobjects/watches.page');

describe('Watches page', () => {

     it('show the Watches Page', () => {
        WatchesPage.open();
        });
    
        it('should show the watches page title', () => {
        //expect(WatchesPage.infoTitle).toHaveTextContaining('Shop These Timeless Watch Brands');
        expect ($('h2=Shop These Timeless Watch Brands')).toBeExisting();
        
    });

    it('should show the watches page title', () => {
        expect(WatchesPage.infoTitle).toHaveTextContaining('Shop by Category');
        
    });

});



