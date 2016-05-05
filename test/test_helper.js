import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

import register from 'ignore-styles';
register(['.css', '.sass', '.scss', '.png']);

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
