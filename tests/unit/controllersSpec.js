describe('BandListCtrl', function () {
  beforeEach(module('angularRocksApp'));

  it('should create a list of three bands', inject(function ($controller) {
    var scope = {};
    var ctrl = $controller('BandListCtrl', {$scope: scope});

    expect(scope.bands.length).toBe(3);
  }));

});
