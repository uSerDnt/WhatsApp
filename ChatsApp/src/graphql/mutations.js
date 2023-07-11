/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createShortVideo = /* GraphQL */ `
  mutation CreateShortVideo(
    $input: CreateShortVideoInput!
    $condition: ModelShortVideoConditionInput
  ) {
    createShortVideo(input: $input, condition: $condition) {
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
export const updateShortVideo = /* GraphQL */ `
  mutation UpdateShortVideo(
    $input: UpdateShortVideoInput!
    $condition: ModelShortVideoConditionInput
  ) {
    updateShortVideo(input: $input, condition: $condition) {
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
export const deleteShortVideo = /* GraphQL */ `
  mutation DeleteShortVideo(
    $input: DeleteShortVideoInput!
    $condition: ModelShortVideoConditionInput
  ) {
    deleteShortVideo(input: $input, condition: $condition) {
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
export const createCommentShortVideo = /* GraphQL */ `
  mutation CreateCommentShortVideo(
    $input: CreateCommentShortVideoInput!
    $condition: ModelCommentShortVideoConditionInput
  ) {
    createCommentShortVideo(input: $input, condition: $condition) {
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
export const updateCommentShortVideo = /* GraphQL */ `
  mutation UpdateCommentShortVideo(
    $input: UpdateCommentShortVideoInput!
    $condition: ModelCommentShortVideoConditionInput
  ) {
    updateCommentShortVideo(input: $input, condition: $condition) {
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
export const deleteCommentShortVideo = /* GraphQL */ `
  mutation DeleteCommentShortVideo(
    $input: DeleteCommentShortVideoInput!
    $condition: ModelCommentShortVideoConditionInput
  ) {
    deleteCommentShortVideo(input: $input, condition: $condition) {
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
export const createLikeShortVideo = /* GraphQL */ `
  mutation CreateLikeShortVideo(
    $input: CreateLikeShortVideoInput!
    $condition: ModelLikeShortVideoConditionInput
  ) {
    createLikeShortVideo(input: $input, condition: $condition) {
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
export const updateLikeShortVideo = /* GraphQL */ `
  mutation UpdateLikeShortVideo(
    $input: UpdateLikeShortVideoInput!
    $condition: ModelLikeShortVideoConditionInput
  ) {
    updateLikeShortVideo(input: $input, condition: $condition) {
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
export const deleteLikeShortVideo = /* GraphQL */ `
  mutation DeleteLikeShortVideo(
    $input: DeleteLikeShortVideoInput!
    $condition: ModelLikeShortVideoConditionInput
  ) {
    deleteLikeShortVideo(input: $input, condition: $condition) {
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
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
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
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
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
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
export const createFriend = /* GraphQL */ `
  mutation CreateFriend(
    $input: CreateFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    createFriend(input: $input, condition: $condition) {
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
export const updateFriend = /* GraphQL */ `
  mutation UpdateFriend(
    $input: UpdateFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    updateFriend(input: $input, condition: $condition) {
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
export const deleteFriend = /* GraphQL */ `
  mutation DeleteFriend(
    $input: DeleteFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    deleteFriend(input: $input, condition: $condition) {
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
export const createShare = /* GraphQL */ `
  mutation CreateShare(
    $input: CreateShareInput!
    $condition: ModelShareConditionInput
  ) {
    createShare(input: $input, condition: $condition) {
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
export const updateShare = /* GraphQL */ `
  mutation UpdateShare(
    $input: UpdateShareInput!
    $condition: ModelShareConditionInput
  ) {
    updateShare(input: $input, condition: $condition) {
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
export const deleteShare = /* GraphQL */ `
  mutation DeleteShare(
    $input: DeleteShareInput!
    $condition: ModelShareConditionInput
  ) {
    deleteShare(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createAttachment = /* GraphQL */ `
  mutation CreateAttachment(
    $input: CreateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    createAttachment(input: $input, condition: $condition) {
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
export const updateAttachment = /* GraphQL */ `
  mutation UpdateAttachment(
    $input: UpdateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    updateAttachment(input: $input, condition: $condition) {
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
export const deleteAttachment = /* GraphQL */ `
  mutation DeleteAttachment(
    $input: DeleteAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    deleteAttachment(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserChatRoom = /* GraphQL */ `
  mutation CreateUserChatRoom(
    $input: CreateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    createUserChatRoom(input: $input, condition: $condition) {
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
export const updateUserChatRoom = /* GraphQL */ `
  mutation UpdateUserChatRoom(
    $input: UpdateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    updateUserChatRoom(input: $input, condition: $condition) {
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
export const deleteUserChatRoom = /* GraphQL */ `
  mutation DeleteUserChatRoom(
    $input: DeleteUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    deleteUserChatRoom(input: $input, condition: $condition) {
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
