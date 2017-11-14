import { JSDOM } from 'jsdom';
import FixedPage from '../src/index';
import { render } from 'react-dom';
import React from 'react';
import { expect } from 'chai';

describe('react-fixed-page', () => {
  let jsdom, document, body, app;

  beforeEach('initialize dom', () => {
    jsdom = new JSDOM(`<!doctype html><html><body><div id="app"></div></body></html>`);
    document = jsdom.window.document;
    body = document.body;
    app = document.getElementById('app');
  });

  it('renders nothing', () => {
    render(<FixedPage fixed={false}/>, app);

    expect(app.innerHTML).to.equal('');
  });
});
