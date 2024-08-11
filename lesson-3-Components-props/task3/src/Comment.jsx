import React from 'react';
import UserInfo from './UserInfo';
import './comment.scss';
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo
        user={{
          name: 'Tom',
          avatarUrl: 'https//avatars1.githubusercontent.com'
        }}

      />
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
