import React from 'react';
import { Item } from 'semantic-ui-react';

import { entities } from 'store';

type Props = { user: entities.User; onClick: () => void };

const User = ({ user, onClick }: Props) => (
  <Item key={user.id} onClick={onClick}>
    <Item.Image size="tiny" src={user.image} />
    <Item.Content>
      <Item.Header>{user.fullName}</Item.Header>
      <Item.Description>{user.position}</Item.Description>
    </Item.Content>
  </Item>
);

export default User;
