var Nightmare = require('nightmare');
var expect = require('chai').expect; // jshint ignore:line

describe('test duckduckgo search results', function() {
  this.timeout(10000);

  it('should find the nightmare github link first', function(done) {
    var nightmare = Nightmare({ show: true })

    nightmare
      .goto('http://yahoo.com')
      .type('form[action*="/search"] [name=p]', 'github nightmare')
      .click('form[action*="/search"] [type=submit]')
      .wait('#main')
      .evaluate(function () {
        return document.querySelector('#main .searchCenterMiddle li a').href
      })
      .end()
      .then(function (result) {
        console.log(result)
        done();
      })
      .catch(function (error) {
        console.error('Search failed:', error);
      });
  });
});