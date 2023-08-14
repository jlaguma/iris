import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Grid from '@material-ui/core/Grid';

export const zIndex = {
  low: 0,
  medium: 1,
  high: 2,
  top: 2147483647,
};

const fullPageOverlayElementId = 'full-page-overlay';
let fullPageOverlayElement = document.getElementById(fullPageOverlayElementId);
if (!fullPageOverlayElement) {
  fullPageOverlayElement = document.createElement('div');
  fullPageOverlayElement.setAttribute('id', fullPageOverlayElementId);
  document.body.appendChild(fullPageOverlayElement);
}

const overlayGridStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: zIndex.top,
};

interface Props {
  id?: string;
  children: string | JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
}

export class CenteredFullPageOverlay extends React.Component<Props> {
  public render(): React.ReactNode {
    return ReactDOM.createPortal(
      <Grid
        id={this.props.id}
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        style={{ ...overlayGridStyle, ...(this.props.style || {}) }}
        onClick={this.props.onClick}
        className={this.props.className}
      >
        {this.props.children}
      </Grid>,
      fullPageOverlayElement!
    );
  }
}
