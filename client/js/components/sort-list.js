import * as React from 'react';
import * as PropTypes from 'prop-types';

export class SortList extends React.Component {

  sortFn = (a,b) => a[this.props.sortField] > b[this.props.sortField]
    ? 1 : ( b[this.props.sortField] > a[this.props.sortField] ? -1 : 0 );

  render() {

    return React.cloneElement(
      this.props.children,
      {
        [ this.props.dataField ] :
          this.props.list.concat().sort(this.sortFn)
      },
    );
  }
}

SortList.propTypes = {
  children: PropTypes.element.isRequired,
  list: PropTypes.array,
  dataField: PropTypes.string,
  sortField: PropTypes.string,
};