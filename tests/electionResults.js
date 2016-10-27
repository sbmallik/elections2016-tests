require('../lib/constants.js');

module.exports = {
  'disabled': false,
  'tags': ['elections2016', 'president', 'senate', 'house', 'governor'],

  'before': function (client) {
    client.resizeWindow(CONSTANTS.BROWSER_WIDTH, CONSTANTS.BROWSER_HEIGHT)
    electionResults = client.page.electionResults();
    electionResults.navigate(electionResults.url);
  },

  'Election Results - President': function (client) {
    electionResults.waitForElementVisible('@logo', CONSTANTS.TIMEOUT),
    electionResults.expect.element('@page_heading').text.to.equal('President Results');
    electionResults.expect.element('@dem_count').text.to.not.equal('0');
    electionResults.expect.element('@rep_count').text.to.not.equal('0');
  },

  'Election Results - Senate': function (client) {
    electionResults.click('@senate_link');
    electionResults.waitForElementVisible('@logo', CONSTANTS.TIMEOUT),
    electionResults.expect.element('@page_heading').text.to.equal('Senate Results');
    electionResults.expect.element('@dem_count').text.to.not.equal('0');
    electionResults.expect.element('@rep_count').text.to.not.equal('0');
  },
    
  'Election Results - House': function (client) {
    electionResults.click('@house_link');
    electionResults.waitForElementVisible('@logo', CONSTANTS.TIMEOUT),
    electionResults.expect.element('@page_heading').text.to.equal('House Results');
    electionResults.expect.element('@dem_count').text.to.not.equal('0');
    electionResults.expect.element('@rep_count').text.to.not.equal('0');
  },
    
  'Election Results - Governor': function (client) {
    electionResults.click('@governor_link');
    electionResults.waitForElementVisible('@logo', CONSTANTS.TIMEOUT),
    electionResults.expect.element('@page_heading').text.to.equal('Governor Results');
    electionResults.expect.element('@dem_count').text.to.not.equal('0');
    electionResults.expect.element('@rep_count').text.to.not.equal('0');
  },

  'after': function (client) {
    client.end();
  }
};
