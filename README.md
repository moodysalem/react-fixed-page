# react-fixed-page
[![npm](https://img.shields.io/npm/v/react-fixed-page-ms.svg?maxAge=86400)](https://www.npmjs.com/package/react-fixed-page-ms)
[![Build Status](https://travis-ci.org/moodysalem/react-fixed-page.svg)](https://travis-ci.org/moodysalem/react-fixed-page)

Declaratively fix the underlying scrolling element of a page for use in overlay elements

# Install
`npm i --save-dev react-fixed-page-ms`

# Props
This component has a single prop `fixed`. You should render this element with `fixed` to prevent the page from scrolling.

# Usage

```jsx harmony
import FixedPage from 'react-fixed-page-ms';
import React, { Component } from 'react';

export default class MyModal extends Component {
  renderModal(){
    // ...
  }
  
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
```
   