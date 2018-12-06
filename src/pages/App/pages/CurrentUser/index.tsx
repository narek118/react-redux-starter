import React from 'react';
import { useMappedState } from 'redux-react-hook';
import { Card, Image } from 'semantic-ui-react';

import { users, common } from 'store';
import { LoadDataConfig } from 'helpers/loadBranchData';

const mapState = (state: common.StoreState) => ({
  user: state.entities.users[state.users.current!]
});

const CurrentUser = () => {
  const { user } = useMappedState(mapState);

  return (
    <Card style={{ margin: 'auto' }}>
      <Image src={user.image} />
      <Card.Content>
        <Card.Header>{user.fullName}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>{user.position}</Card.Description>
      </Card.Content>
    </Card>
  );
};

CurrentUser.loadData = ({ store: { dispatch }, match }: LoadDataConfig) =>
  (dispatch as any)(users.fetchCurrentUser(match.params.id));

export default CurrentUser;
