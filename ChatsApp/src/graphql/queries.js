/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShortVideo = /* GraphQL */ `
  query GetShortVideo($id: ID!) {
    getShortVideo(id: $id) {
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
export const listShortVideos = /* GraphQL */ `
  query ListShortVideos(
    $filter: ModelShortVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShortVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncShortVideos = /* GraphQL */ `
  query SyncShortVideos(
    $filter: ModelShortVideoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncShortVideos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCommentShortVideo = /* GraphQL */ `
  query GetCommentShortVideo($id: ID!) {
    getCommentShortVideo(id: $id) {
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
export const listCommentShortVideos = /* GraphQL */ `
  query ListCommentShortVideos(
    $filter: ModelCommentShortVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentShortVideos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        shortVideoID
        userID
        createdAt
        content
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCommentShortVideos = /* GraphQL */ `
  query SyncCommentShortVideos(
    $filter: ModelCommentShortVideoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommentShortVideos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        shortVideoID
        userID
        createdAt
        content
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listCommentsByShortVideo = /* GraphQL */ `
  query ListCommentsByShortVideo(
    $shortVideoID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentShortVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentsByShortVideo(
      shortVideoID: $shortVideoID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        shortVideoID
        userID
        createdAt
        content
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const commentShortVideosByUserID = /* GraphQL */ `
  query CommentShortVideosByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentShortVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentShortVideosByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        shortVideoID
        userID
        createdAt
        content
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLikeShortVideo = /* GraphQL */ `
  query GetLikeShortVideo($id: ID!) {
    getLikeShortVideo(id: $id) {
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
export const listLikeShortVideos = /* GraphQL */ `
  query ListLikeShortVideos(
    $filter: ModelLikeShortVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikeShortVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        shortVideoID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLikeShortVideos = /* GraphQL */ `
  query SyncLikeShortVideos(
    $filter: ModelLikeShortVideoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikeShortVideos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        shortVideoID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listLikesByShortVideo = /* GraphQL */ `
  query ListLikesByShortVideo(
    $shortVideoID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLikeShortVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikesByShortVideo(
      shortVideoID: $shortVideoID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        shortVideoID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const likeShortVideosByUserID = /* GraphQL */ `
  query LikeShortVideosByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeShortVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likeShortVideosByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        shortVideoID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
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
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSongs = /* GraphQL */ `
  query SyncSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSongs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        imageUri
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        action
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNotifications = /* GraphQL */ `
  query SyncNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        action
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const notificationsByUserID = /* GraphQL */ `
  query NotificationsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        action
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFriend = /* GraphQL */ `
  query GetFriend($id: ID!) {
    getFriend(id: $id) {
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
export const listFriends = /* GraphQL */ `
  query ListFriends(
    $filter: ModelFriendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        requesterID
        requesteeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFriends = /* GraphQL */ `
  query SyncFriends(
    $filter: ModelFriendFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFriends(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        status
        requesterID
        requesteeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const friendsByRequesterID = /* GraphQL */ `
  query FriendsByRequesterID(
    $requesterID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFriendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    friendsByRequesterID(
      requesterID: $requesterID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        requesterID
        requesteeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const friendsByRequesteeID = /* GraphQL */ `
  query FriendsByRequesteeID(
    $requesteeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFriendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    friendsByRequesteeID(
      requesteeID: $requesteeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        requesterID
        requesteeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getShare = /* GraphQL */ `
  query GetShare($id: ID!) {
    getShare(id: $id) {
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
export const listShares = /* GraphQL */ `
  query ListShares(
    $filter: ModelShareFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShares(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncShares = /* GraphQL */ `
  query SyncShares(
    $filter: ModelShareFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncShares(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listSharesByPost = /* GraphQL */ `
  query ListSharesByPost(
    $postID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelShareFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSharesByPost(
      postID: $postID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const sharesByUserID = /* GraphQL */ `
  query SharesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelShareFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sharesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        shareID
        userID
        createdAt
        content
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        postID
        shareID
        userID
        createdAt
        content
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listCommentsByPost = /* GraphQL */ `
  query ListCommentsByPost(
    $postID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentsByPost(
      postID: $postID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        shareID
        userID
        createdAt
        content
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listCommentsByShare = /* GraphQL */ `
  query ListCommentsByShare(
    $shareID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentsByShare(
      shareID: $shareID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        shareID
        userID
        createdAt
        content
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const commentsByUserID = /* GraphQL */ `
  query CommentsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        shareID
        userID
        createdAt
        content
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        shareID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLikes = /* GraphQL */ `
  query SyncLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        postID
        shareID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listLikesByPost = /* GraphQL */ `
  query ListLikesByPost(
    $postID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikesByPost(
      postID: $postID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        shareID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listLikesByShares = /* GraphQL */ `
  query ListLikesByShares(
    $shareID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikesByShares(
      shareID: $shareID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        shareID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const likesByUserID = /* GraphQL */ `
  query LikesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        shareID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAttachment = /* GraphQL */ `
  query GetAttachment($id: ID!) {
    getAttachment(id: $id) {
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
export const listAttachments = /* GraphQL */ `
  query ListAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAttachments = /* GraphQL */ `
  query SyncAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAttachments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const attachmentsByChatroomID = /* GraphQL */ `
  query AttachmentsByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const attachmentsByMessageID = /* GraphQL */ `
  query AttachmentsByMessageID(
    $messageID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByMessageID(
      messageID: $messageID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncChatRooms = /* GraphQL */ `
  query SyncChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listMessagesByChatRoom = /* GraphQL */ `
  query ListMessagesByChatRoom(
    $chatroomID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessagesByChatRoom(
      chatroomID: $chatroomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const messagesByUserID = /* GraphQL */ `
  query MessagesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUserChatRoom = /* GraphQL */ `
  query GetUserChatRoom($id: ID!) {
    getUserChatRoom(id: $id) {
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
export const listUserChatRooms = /* GraphQL */ `
  query ListUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatRoomId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserChatRooms = /* GraphQL */ `
  query SyncUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        chatRoomId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userChatRoomsByChatRoomId = /* GraphQL */ `
  query UserChatRoomsByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userChatRoomsByUserId = /* GraphQL */ `
  query UserChatRoomsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
