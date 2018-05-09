import React, { Component } from 'react';
import Router from 'react-router';

class SheetList extends Component {
  createSheet() {
    console.log('yup');
  }

  render() {
    return (
      <div className="sheet-picker">
        <div className="sheet-list">
          <span className="no-sheets-message">No sheets available in the store.</span>
        </div>
      </div>
    );
  }
};

export default SheetList;
