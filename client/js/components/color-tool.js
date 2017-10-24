import * as React from 'react';

import { ToolHeader } from './tool-header';
import { ColorList } from './color-list';
import { ColorForm } from './color-form'; 
import { SortList } from './sort-list';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colorList: props.colorList.concat(),
      newColorName: '',
      newColorHexCode: '#000000',
    };
  }

  onChange(e) {
    this.setState({ [ e.target.name ]: e.target.value });
  }

  addColor = newColor => {

    newColor.id = Math.max(...this.state.colorList.map(c => c.id)) + 1;

    this.setState({
      colorList: this.state.colorList.concat(newColor),
    });
  };

  render() {

    return <div>
      <ToolHeader headerText="Color Tool" />
      <SortList list={this.state.colorList} sortField="name" dataField="colors">
        <ColorList />
      </SortList>
      <ColorForm onSubmitColor={this.addColor} submitButtonText="Add Color" />
    </div>;
  }
}