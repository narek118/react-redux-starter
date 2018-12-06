import React, { Component } from 'react';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';
import { Location } from 'history';
import { Loader } from 'semantic-ui-react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import loadBranchData from './helpers/loadBranchData';

NProgress.configure({ showSpinner: false });

type Props = RouteComponentProps<{}>;
type State = { previousLocation: null | Location; initialRender: boolean };

class PendingNavDataLoader extends Component<Props, State> {
  state = {
    previousLocation: null,
    initialRender: true
  };

  loadData = async (props: Props) => {
    await loadBranchData(props.location.pathname);

    // clear previousLocation so the next screen renders
    this.setState({
      previousLocation: null
    });
  };

  async componentWillReceiveProps(nextProps: Props) {
    const navigated = nextProps.location !== this.props.location;

    if (navigated) {
      // save the location so we can render the old screen
      this.setState({
        previousLocation: this.props.location
      });

      NProgress.start();
      await this.loadData(nextProps);
      NProgress.done();
    }
  }

  async componentDidMount() {
    await this.loadData(this.props);

    this.setState({ initialRender: false });
  }

  render() {
    const { children, location } = this.props;
    const { previousLocation, initialRender } = this.state;

    // use a controlled <Route> to trick all descendants into
    // rendering the old location
    return initialRender ? (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '100vh'
        }}
      >
        <Loader active inline="centered" />
      </div>
    ) : (
      <Route location={previousLocation || location} render={() => children} />
    );
  }
}

export default withRouter(PendingNavDataLoader);
