import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

import { CenteredFullPageOverlay } from '../CenteredFullPageOverlay';

interface Props {
  show: boolean;
  contained?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const LOADING_OVERLAY_ID = 'loading-overlay';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 0;
`;

export class LoadingOverlay extends React.Component<Props> {
  public render() {
    if (!this.props.show) {
      return null;
    }

    if (this.props.contained) {
      return (
        <Container className='loading-overlay' style={this.props.style}>
          <CircularProgress />
        </Container>
      );
    }

    return (
      <CenteredFullPageOverlay
        className='loading-overlay'
        id={LOADING_OVERLAY_ID}
        onClick={this.props.onClick}
        style={this.props.style}
      >
        <CircularProgress />
      </CenteredFullPageOverlay>
    );
  }
}
