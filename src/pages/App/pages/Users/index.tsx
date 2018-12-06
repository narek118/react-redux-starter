import React from 'react';
import { useMappedState } from 'redux-react-hook';
import { History } from 'history';
import { Item } from 'semantic-ui-react';

import { users, common } from 'store';
import User from './components/User';

const mapState = (state: common.StoreState) => ({
  users: state.users.list.map((user: common.Id) => state.entities.users[user])
});

type Props = {
  history: History;
};

const Users = ({ history }: Props) => {
  const state = useMappedState(mapState);

  return (
    <Item.Group link>
      {state.users.map(user => (
        <User
          key={user.id}
          user={user}
          onClick={() => {
            history.push(`/users/${user.id}`);
          }}
        />
      ))}
    </Item.Group>
  );
};

Users.loadData = ({ store: { dispatch } }: any) => dispatch(users.fetchUsers());

export default Users;
