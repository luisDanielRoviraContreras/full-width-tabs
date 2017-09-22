'use babel';
import $ from 'jquery'
import FullWidthTabsView from './full-width-tabs-view';
import { CompositeDisposable } from 'atom';

export default {
  activate(state) {
    atom.themes.onDidChangeActiveThemes(() => {
        $('.tab-bar').addClass('full-width-tabs')
			})

  }
};
