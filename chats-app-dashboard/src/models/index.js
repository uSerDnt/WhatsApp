// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const StatusUser = {
  "SUSPEND": "SUSPEND",
  "ACTIVE": "ACTIVE"
};

const NotificationAction = {
  "POST_CREATED": "POST_CREATED",
  "POST_LIKED": "POST_LIKED",
  "POST_COMMENTED": "POST_COMMENTED"
};

const FriendStatus = {
  "PENDING": "PENDING",
  "ACCEPTED": "ACCEPTED",
  "NOT_FRIENDS": "NOT_FRIENDS"
};

const AttachmentType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
};

const { ShortVideo, Song, Notification, Friend, Share, Comment, Like, Post, Attachment, ChatRoom, Message, User, UserChatRoom } = initSchema(schema);

export {
  ShortVideo,
  Song,
  Notification,
  Friend,
  Share,
  Comment,
  Like,
  Post,
  Attachment,
  ChatRoom,
  Message,
  User,
  UserChatRoom,
  StatusUser,
  NotificationAction,
  FriendStatus,
  AttachmentType
};