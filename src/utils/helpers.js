// globally available functions

/* eslint max-len: 0 */

import store from './store';
// import { fonts } from './constants';
import React from 'react';

const helpers = {
  /**
   * Retrieves a query parameter from a URL (by default the current URL).
   * @param {String} name - Name of the URL parameter to find
   * @param {String} str - URL to look for the query parameter in
   * @returns {String} URL parameter's value or an empty string
   */
  getUrlParameter(name, str = location.search) {
    const filteredName = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp(`[\\?&]${filteredName}=([^&#]*)`);
    const results = regex.exec(str);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  },

  /**
   * Copies a provided string to the clipboard by creating/removing a textarea
   * @param {String} toCopy - String to copy to the clipboard
   */
   
  copyToClipboard(toCopy) {
    const copy = document.createElement('textarea');
    document.body.appendChild(copy);
    copy.value = toCopy;
    copy.select();
    document.execCommand('copy');
    document.body.removeChild(copy);
  },
};

export default helpers;