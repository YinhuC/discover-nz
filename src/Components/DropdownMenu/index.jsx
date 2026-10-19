/* Third Party */
import React from 'react';

/* Components */
import { Center } from './style';

/* Functions */

class DropdownMenu extends React.Component {
  render() {
    return (
      <>
        <Center
          id='dropdown'
          style={{ height: `${this.props.menuHeight}%` }}
        ></Center>
      </>
    );
  }
}

export default DropdownMenu;
