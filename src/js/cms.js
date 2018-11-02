import React from 'react';
import CMS from 'netlify-cms';

import HomePreview from './cms-preview-templates/home';

// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return (
      <input
        style={{ height: '80px' }}
        type="color"
        value={this.props.value}
        onInput={e => this.props.onChange(e.target.value)}
      />
    );
  }
}

CMS.registerPreviewStyle('/css/main.css');
CMS.registerPreviewTemplate('home', HomePreview);
CMS.registerWidget('color', ColorControl);
