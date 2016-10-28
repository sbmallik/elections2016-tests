module.exports = {
  url: function() {
    return this.api.launchUrl + '/results/president';
  },

  elements: {
    logo: { selector: 'a.riopic' },
    page_heading: { selector: '.position-title' },
    dem_count: {  selector: '.dem .big-count' },
    rep_count: { selector: '.rep .big-count' },
    senate_link: { selector: '.desktop.tab-text[data-arg=senate]' },
    house_link: { selector: '.desktop.tab-text[data-arg=house]' },
    governor_link: { selector: '.desktop.tab-text[data-arg=governor]' },
    initiatives_link: { selector: '.desktop.tab-text[data-arg=ballot]' }
  }
};
