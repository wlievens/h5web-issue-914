import {AfterViewChecked, AfterViewInit, Component, OnChanges} from '@angular/core';
import {App, MockProvider} from '@h5web/app';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-h5web-wrapper',
  templateUrl: './h5web-wrapper.component.html',
  styleUrls: ['./h5web-wrapper.component.css']
})
export class H5webWrapperComponent implements OnChanges, AfterViewInit, AfterViewChecked {
  rootElementId: string = uuid();

  private viewLoaded = false;
  private reactRendered = false;

  public ngOnChanges() {
    this.renderComponent();
  }

  public ngAfterViewInit() {
    this.viewLoaded = true;
    this.renderComponent();
  }

  public ngAfterViewChecked() {
    if (!this.reactRendered && this.viewLoaded) {
      this.renderComponent()
    }
  }

  private renderComponent() {
    const {viewLoaded, rootElementId} = this;
    const rootElement = document.getElementById(rootElementId);
    if (!viewLoaded || !rootElement) {
      return;
    }

    ReactDOM.render(
      React.createElement(MockProvider, {
        children: React.createElement(App, {
          startFullscreen: false
        })
      }),
      rootElement
    );
    this.reactRendered = true;
  }
}
