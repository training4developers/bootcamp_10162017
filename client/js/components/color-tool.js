import * as React from 'react';

import { ToolHeader } from './tool-header';
import { ColorList } from './color-list';
import { ColorForm } from './color-form'; 
import { SortList } from './sort-list';

export class ColorTool extends React.Component {

  componentDidMount() {
    this.props.refreshColors();
  }

  onChange(e) {
    this.setState({ [ e.target.name ]: e.target.value });
  }

  render() {

    return <div>
      <ToolHeader headerText="Color Tool" />
      <SortList list={this.props.colors} sortField="name" dataField="colors">
        <ColorList />
      </SortList>
      <ColorForm onSubmitColor={this.props.addColor} submitButtonText="Add Color" />
    </div>;
  }
}