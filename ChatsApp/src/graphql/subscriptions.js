/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateShortVideo = /* GraphQL */ `
  subscription OnCreateShortVideo(
    $filter: ModelSubscriptionShortVideoFilterInput
  ) {
    onCreateShortVideo(filter: $filter) {
      id
      videoUri
      content
      User {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Song {
        id
        name
        imageUri
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Likes {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      shortVideoUserId
      shortVideoSongId
    }
  }
`;
export const onUpdateShortVideo = /* GraphQL */ `
  subscription OnUpdateShortVideo(
    $filter: ModelSubscriptionShortVideoFilterInput
  ) {
    onUpdateShortVideo(filter: $filter) {
      id
      videoUri
      content
      User {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Song {
        id
        name
        imageUri
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Likes {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      shortVideoUserId
      shortVideoSongId
    }
  }
`;
export const onDeleteShortVideo = /* GraphQL */ `
  subscription OnDeleteShortVideo(
    $filter: ModelSubscriptionShortVideoFilterInput
  ) {
    onDeleteShortVideo(filter: $filter) {
      id
      videoUri
      content
      User {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Song {
        id
        name
        imageUri
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Likes {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      shortVideoUserId
      shortVideoSongId
    }
  }
`;
export const onCreateCommentShortVideo = /* GraphQL */ `
  subscription OnCreateCommentShortVideo(
    $filter: ModelSubscriptionCommentShortVideoFilterInput
  ) {
    onCreateCommentShortVideo(filter: $filter) {
      id
      shortVideoID
      userID
      createdAt
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      shortVideo {
        id
        videoUri
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        shortVideoUserId
        shortVideoSongId
      }
      content
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCommentShortVideo = /* GraphQL */ `
  subscription OnUpdateCommentShortVideo(
    $filter: ModelSubscriptionCommentShortVideoFilterInput
  ) {
    onUpdateCommentShortVideo(filter: $filter) {
      id
      shortVideoID
      userID
      createdAt
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      shortVideo {
        id
        videoUri
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        shortVideoUserId
        shortVideoSongId
      }
      content
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCommentShortVideo = /* GraphQL */ `
  subscription OnDeleteCommentShortVideo(
    $filter: ModelSubscriptionCommentShortVideoFilterInput
  ) {
    onDeleteCommentShortVideo(filter: $filter) {
      id
      shortVideoID
      userID
      createdAt
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      shortVideo {
        id
        videoUri
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        shortVideoUserId
        shortVideoSongId
      }
      content
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateLikeShortVideo = /* GraphQL */ `
  subscription OnCreateLikeShortVideo(
    $filter: ModelSubscriptionLikeShortVideoFilterInput
  ) {
    onCreateLikeShortVideo(filter: $filter) {
      id
      shortVideoID
      userID
      createdAt
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      shortVideo {
        id
        videoUri
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        shortVideoUserId
        shortVideoSongId
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLikeShortVideo = /* GraphQL */ `
  subscription OnUpdateLikeShortVideo(
    $filter: ModelSubscriptionLikeShortVideoFilterInput
  ) {
    onUpdateLikeShortVideo(filter: $filter) {
      id
      shortVideoID
      userID
      createdAt
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      shortVideo {
        id
        videoUri
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        shortVideoUserId
        shortVideoSongId
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLikeShortVideo = /* GraphQL */ `
  subscription OnDeleteLikeShortVideo(
    $filter: ModelSubscriptionLikeShortVideoFilterInput
  ) {
    onDeleteLikeShortVideo(filter: $filter) {
      id
      shortVideoID
      userID
      createdAt
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      shortVideo {
        id
        videoUri
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        shortVideoUserId
        shortVideoSongId
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong($filter: ModelSubscriptionSongFilterInput) {
    onCreateSong(filter: $filter) {
      id
      name
      imageUri
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong($filter: ModelSubscriptionSongFilterInput) {
    onUpdateSong(filter: $filter) {
      id
      name
      imageUri
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong($filter: ModelSubscriptionSongFilterInput) {
    onDeleteSong(filter: $filter) {
      id
      name
      imageUri
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
      id
      userID
      action
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
      id
      userID
      action
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
      id
      userID
      action
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateFriend = /* GraphQL */ `
  subscription OnCreateFriend($filter: ModelSubscriptionFriendFilterInput) {
    onCreateFriend(filter: $filter) {
      id
      status
      requesterID
      requesteeID
      createdAt
      requester {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      requestee {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateFriend = /* GraphQL */ `
  subscription OnUpdateFriend($filter: ModelSubscriptionFriendFilterInput) {
    onUpdateFriend(filter: $filter) {
      id
      status
      requesterID
      requesteeID
      createdAt
      requester {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      requestee {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteFriend = /* GraphQL */ `
  subscription OnDeleteFriend($filter: ModelSubscriptionFriendFilterInput) {
    onDeleteFriend(filter: $filter) {
      id
      status
      requesterID
      requesteeID
      createdAt
      requester {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      requestee {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateShare = /* GraphQL */ `
  subscription OnCreateShare($filter: ModelSubscriptionShareFilterInput) {
    onCreateShare(filter: $filter) {
      id
      postID
      userID
      createdAt
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      post {
        id
        content
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postUserId
      }
      Content
      likes {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateShare = /* GraphQL */ `
  subscription OnUpdateShare($filter: ModelSubscriptionShareFilterInput) {
    onUpdateShare(filter: $filter) {
      id
      postID
      userID
      createdAt
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      post {
        id
        content
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postUserId
      }
      Content
      likes {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteShare = /* GraphQL */ `
  subscription OnDeleteShare($filter: ModelSubscriptionShareFilterInput) {
    onDeleteShare(filter: $filter) {
      id
      postID
      userID
      createdAt
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      post {
        id
        content
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postUserId
      }
      Content
      likes {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      postID
      shareID
      userID
      createdAt
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      post {
        id
        content
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postUserId
      }
      content
      share {
        id
        postID
        userID
        createdAt
        Content
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      postID
      shareID
      userID
      createdAt
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      post {
        id
        content
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postUserId
      }
      content
      share {
        id
        postID
        userID
        createdAt
        Content
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      postID
      shareID
      userID
      createdAt
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      post {
        id
        content
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postUserId
      }
      content
      share {
        id
        postID
        userID
        createdAt
        Content
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
      id
      postID
      shareID
      userID
      createdAt
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      post {
        id
        content
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postUserId
      }
      share {
        id
        postID
        userID
        createdAt
        Content
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
      id
      postID
      shareID
      userID
      createdAt
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      post {
        id
        content
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postUserId
      }
      share {
        id
        postID
        userID
        createdAt
        Content
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
      id
      postID
      shareID
      userID
      createdAt
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      post {
        id
        content
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postUserId
      }
      share {
        id
        postID
        userID
        createdAt
        Content
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      content
      image
      User {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Likes {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      Shares {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postUserId
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      content
      image
      User {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Likes {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      Shares {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postUserId
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      content
      image
      User {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Likes {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      Shares {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postUserId
    }
  }
`;
export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onCreateAttachment(filter: $filter) {
      id
      storageKey
      type
      width
      height
      duration
      chatroomID
      messageID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onUpdateAttachment(filter: $filter) {
      id
      storageKey
      type
      width
      height
      duration
      chatroomID
      messageID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onDeleteAttachment(filter: $filter) {
      id
      storageKey
      type
      width
      height
      duration
      chatroomID
      messageID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
      id
      name
      image
      Messages {
        nextToken
        startedAt
      }
      users {
        nextToken
        startedAt
      }
      LastMessage {
        id
        createdAt
        text
        chatroomID
        images
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Attachments {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomLastMessageId
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
      id
      name
      image
      Messages {
        nextToken
        startedAt
      }
      users {
        nextToken
        startedAt
      }
      LastMessage {
        id
        createdAt
        text
        chatroomID
        images
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Attachments {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomLastMessageId
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
      id
      name
      image
      Messages {
        nextToken
        startedAt
      }
      users {
        nextToken
        startedAt
      }
      LastMessage {
        id
        createdAt
        text
        chatroomID
        images
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Attachments {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomLastMessageId
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      createdAt
      text
      chatroomID
      images
      Attachments {
        nextToken
        startedAt
      }
      userID
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      createdAt
      text
      chatroomID
      images
      Attachments {
        nextToken
        startedAt
      }
      userID
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      createdAt
      text
      chatroomID
      images
      Attachments {
        nextToken
        startedAt
      }
      userID
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        startedAt
      }
      Messages {
        nextToken
        startedAt
      }
      Likes {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      Shares {
        nextToken
        startedAt
      }
      LikeShortVideos {
        nextToken
        startedAt
      }
      CommentShortVideos {
        nextToken
        startedAt
      }
      gender
      birthday
      friendRequestsSent {
        nextToken
        startedAt
      }
      friendRequestsReceived {
        nextToken
        startedAt
      }
      Notifications {
        nextToken
        startedAt
      }
      state
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        startedAt
      }
      Messages {
        nextToken
        startedAt
      }
      Likes {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      Shares {
        nextToken
        startedAt
      }
      LikeShortVideos {
        nextToken
        startedAt
      }
      CommentShortVideos {
        nextToken
        startedAt
      }
      gender
      birthday
      friendRequestsSent {
        nextToken
        startedAt
      }
      friendRequestsReceived {
        nextToken
        startedAt
      }
      Notifications {
        nextToken
        startedAt
      }
      state
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        startedAt
      }
      Messages {
        nextToken
        startedAt
      }
      Likes {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      Shares {
        nextToken
        startedAt
      }
      LikeShortVideos {
        nextToken
        startedAt
      }
      CommentShortVideos {
        nextToken
        startedAt
      }
      gender
      birthday
      friendRequestsSent {
        nextToken
        startedAt
      }
      friendRequestsReceived {
        nextToken
        startedAt
      }
      Notifications {
        nextToken
        startedAt
      }
      state
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserChatRoom = /* GraphQL */ `
  subscription OnCreateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onCreateUserChatRoom(filter: $filter) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        name
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserChatRoom = /* GraphQL */ `
  subscription OnUpdateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onUpdateUserChatRoom(filter: $filter) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        name
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserChatRoom = /* GraphQL */ `
  subscription OnDeleteUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onDeleteUserChatRoom(filter: $filter) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        name
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      user {
        id
        name
        status
        image
        gender
        birthday
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
