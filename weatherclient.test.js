
describe ('Weatherclient.', () => {
    it('Returns items that begin with Ma and price < 10', () => {
        expect(searchCandies('Ma', 10)).toEqual (['Mars','Maltesers']);
    })

});