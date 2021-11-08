import React from 'react';
import { CHeader, Main } from '.';

class PageWeapper extends React.Component {
  render() {
    return (
      <div style>
        <CHeader />
        <Main />
      </div>
    );
  }
}
export default PageWeapper;
