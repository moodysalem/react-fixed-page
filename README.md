# [![npm](https://img.shields.io/npm/v/react-fixed-page.svg?maxAge=86400)](https://www.npmjs.com/package/react-fixed-page) [![Build Status](https://travis-ci.org/moodysalem/react-fixed-page.svg)](https://travis-ci.org/moodysalem/react-fixed-page) react-fixed-page

# react-fixed-page
Declaratively fix the underlying scrolling element of a page for use in overlay elements

# Install
`yarn add react-fixed-page`

# Props
This component has a single prop named fixed. You should render this element with fixed={true} to fix the page from scrolling.

# Usage

    import FixedPage from 'react-fixed-page';
    import React, { Component } from 'react';

    export default class MyModal extends Component {
      render() {
        const { open } = this.props;
        return (
          <div>
            { open ? this.renderModal() : null }
            <FixedPage fixed={open}/>
          </div>
        );
      }
    }
