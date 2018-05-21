import React, { Component } from 'react';
import Router from 'react-router';

class SheetPicker extends Component {

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

export default SheetPicker;
