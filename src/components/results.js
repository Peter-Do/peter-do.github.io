import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import { hits} from 'instantsearch.js/es/widgets';



import resultHit from '../templates/result-hit';

/**
 * @class ResultsPage
 * @description Instant Search class to display content on main page
 */
class ResultPage {
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      'WDNA44MBO1',
      '46d48ec631ffb69a9e7f7bf3afe2e745'
    );

    this._searchInstance = instantsearch({
      indexName: 'index_products',
      searchClient: this._searchClient,
    });
  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() {
    this._searchInstance.addWidgets([
      hits({
        container: '#hits',
        templates: {
          item: resultHit,
        },
      }),
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
  }
}

export default ResultPage;
