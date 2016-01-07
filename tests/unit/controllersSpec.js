describe('BandListCtrl', function () {
  beforeEach(module('angularRocksApp'));

  it('should create a list of three bands', inject(function ($controller) {
    var scope = {};
    var ctrl = $controller('BandListCtrl', {$scope: scope});

    expect(scope.bands.length).toBe(3);
  }));

  it('should convert a band.name to a url', inject(function ($controller) {
    var scope = {};
    var ctrl = $controller('BandListCtrl', {$scope: scope});

    expect(scope.nameToUrl('The Rolling Stones')).toBe('#/the-rolling-stones');
    expect(scope.nameToUrl('Queen')).toBe('#/queen');
  }));

});
