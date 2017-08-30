var Nightmare = require('nightmare');
var expect = require('chai').expect; // jshint ignore:line

describe('test duckduckgo search results', function() {
  this.timeout(10000);

  it('should find the nightmare github link first', function(done) {
    var nightmare = Nightmare({ show: true })

    nightmare
      .goto('https://alexandria.io/browser')
      .type('#search-main', 'test')
      .wait('#media-results-wrap')
      .click('#browse-media .module-links > ul > li a[value="movie"]')
      .wait('#media-results-wrap')
      .click('#media-results-wrap h3.media-title')
      .wait('#view-artifact-wrap')
      .evaluate(function () {
        var title = document.querySelector('h1.artifact-title');

        return title && title.innerText.length > 0;
      })
      .end()
      .then(function (result) {
        done();
      })
      .catch(function (error) {
        console.error('Search failed:', error);
      });
  });
});