import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum StatusUser {
  SUSPEND = "SUSPEND",
  ACTIVE = "ACTIVE"
}

export enum NotificationAction {
  POST_CREATED = "POST_CREATED",
  POST_LIKED = "POST_LIKED",
  POST_COMMENTED = "POST_COMMENTED"
}

export enum FriendStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  NOT_FRIENDS = "NOT_FRIENDS"
}

export enum AttachmentType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO"
}



type EagerShortVideo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShortVideo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly videoUri: string;
  readonly content?: string | null;
  readonly User?: User | null;
  readonly Song?: Song | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly shortVideoUserId?: string | null;
  readonly shortVideoSongId?: string | null;
}

type LazyShortVideo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShortVideo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly videoUri: string;
  readonly content?: string | null;
  readonly User: AsyncItem<User | undefined>;
  readonly Song: AsyncItem<Song | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly shortVideoUserId?: string | null;
  readonly shortVideoSongId?: string | null;
}

export declare type ShortVideo = LazyLoading extends LazyLoadingDisabled ? EagerShortVideo : LazyShortVideo

export declare const ShortVideo: (new (init: ModelInit<ShortVideo>) => ShortVideo) & {
  copyOf(source: ShortVideo, mutator: (draft: MutableModel<ShortVideo>) => MutableModel<ShortVideo> | void): ShortVideo;
}

type EagerSong = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Song, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly imageUri?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySong = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Song, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly imageUri?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Song = LazyLoading extends LazyLoadingDisabled ? EagerSong : LazySong

export declare const Song: (new (init: ModelInit<Song>) => Song) & {
  copyOf(source: Song, mutator: (draft: MutableModel<Song>) => MutableModel<Song> | void): Song;
}

type EagerNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly action: NotificationAction | keyof typeof NotificationAction;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly action: NotificationAction | keyof typeof NotificationAction;
  readonly user: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification

export declare const Notification: (new (init: ModelInit<Notification>) => Notification) & {
  copyOf(source: Notification, mutator: (draft: MutableModel<Notification>) => MutableModel<Notification> | void): Notification;
}

type EagerFriend = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Friend, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly status: FriendStatus | keyof typeof FriendStatus;
  readonly requesterID: string;
  readonly requesteeID: string;
  readonly createdAt: string;
  readonly requester?: User | null;
  readonly requestee?: User | null;
  readonly updatedAt?: string | null;
}

type LazyFriend = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Friend, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly status: FriendStatus | keyof typeof FriendStatus;
  readonly requesterID: string;
  readonly requesteeID: string;
  readonly createdAt: string;
  readonly requester: AsyncItem<User | undefined>;
  readonly requestee: AsyncItem<User | undefined>;
  readonly updatedAt?: string | null;
}

export declare type Friend = LazyLoading extends LazyLoadingDisabled ? EagerFriend : LazyFriend

export declare const Friend: (new (init: ModelInit<Friend>) => Friend) & {
  copyOf(source: Friend, mutator: (draft: MutableModel<Friend>) => MutableModel<Friend> | void): Friend;
}

type EagerShare = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Share, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly postID: string;
  readonly userID: string;
  readonly createdAt: string;
  readonly user?: User | null;
  readonly post?: Post | null;
  readonly Content?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShare = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Share, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly postID: string;
  readonly userID: string;
  readonly createdAt: string;
  readonly user: AsyncItem<User | undefined>;
  readonly post: AsyncItem<Post | undefined>;
  readonly Content?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Share = LazyLoading extends LazyLoadingDisabled ? EagerShare : LazyShare

export declare const Share: (new (init: ModelInit<Share>) => Share) & {
  copyOf(source: Share, mutator: (draft: MutableModel<Share>) => MutableModel<Share> | void): Share;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly postID: string;
  readonly userID: string;
  readonly createdAt: string;
  readonly user?: User | null;
  readonly post?: Post | null;
  readonly content?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly postID: string;
  readonly userID: string;
  readonly createdAt: string;
  readonly user: AsyncItem<User | undefined>;
  readonly post: AsyncItem<Post | undefined>;
  readonly content?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly postID: string;
  readonly userID: string;
  readonly createdAt: string;
  readonly user?: User | null;
  readonly post?: Post | null;
  readonly updatedAt?: string | null;
}

type LazyLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly postID: string;
  readonly userID: string;
  readonly createdAt: string;
  readonly user: AsyncItem<User | undefined>;
  readonly post: AsyncItem<Post | undefined>;
  readonly updatedAt?: string | null;
}

export declare type Like = LazyLoading extends LazyLoadingDisabled ? EagerLike : LazyLike

export declare const Like: (new (init: ModelInit<Like>) => Like) & {
  copyOf(source: Like, mutator: (draft: MutableModel<Like>) => MutableModel<Like> | void): Like;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly image?: string | null;
  readonly User?: User | null;
  readonly Likes?: (Like | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly Shares?: (Share | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postUserId?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly image?: string | null;
  readonly User: AsyncItem<User | undefined>;
  readonly Likes: AsyncCollection<Like>;
  readonly Comments: AsyncCollection<Comment>;
  readonly Shares: AsyncCollection<Share>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postUserId?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerAttachment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attachment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storageKey: string;
  readonly type: AttachmentType | keyof typeof AttachmentType;
  readonly width?: number | null;
  readonly height?: number | null;
  readonly duration?: number | null;
  readonly chatroomID: string;
  readonly messageID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAttachment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attachment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storageKey: string;
  readonly type: AttachmentType | keyof typeof AttachmentType;
  readonly width?: number | null;
  readonly height?: number | null;
  readonly duration?: number | null;
  readonly chatroomID: string;
  readonly messageID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Attachment = LazyLoading extends LazyLoadingDisabled ? EagerAttachment : LazyAttachment

export declare const Attachment: (new (init: ModelInit<Attachment>) => Attachment) & {
  copyOf(source: Attachment, mutator: (draft: MutableModel<Attachment>) => MutableModel<Attachment> | void): Attachment;
}

type EagerChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly Messages?: (Message | null)[] | null;
  readonly users?: (UserChatRoom | null)[] | null;
  readonly LastMessage?: Message | null;
  readonly Attachments?: (Attachment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

type LazyChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly Messages: AsyncCollection<Message>;
  readonly users: AsyncCollection<UserChatRoom>;
  readonly LastMessage: AsyncItem<Message | undefined>;
  readonly Attachments: AsyncCollection<Attachment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

export declare type ChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerChatRoom : LazyChatRoom

export declare const ChatRoom: (new (init: ModelInit<ChatRoom>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom>) => MutableModel<ChatRoom> | void): ChatRoom;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly text: string;
  readonly chatroomID: string;
  readonly images?: (string | null)[] | null;
  readonly Attachments?: (Attachment | null)[] | null;
  readonly userID: string;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly text: string;
  readonly chatroomID: string;
  readonly images?: (string | null)[] | null;
  readonly Attachments: AsyncCollection<Attachment>;
  readonly userID: string;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly status?: string | null;
  readonly image?: string | null;
  readonly ChatRooms?: (UserChatRoom | null)[] | null;
  readonly Messages?: (Message | null)[] | null;
  readonly Likes?: (Like | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly Shares?: (Share | null)[] | null;
  readonly gender?: string | null;
  readonly birthday?: string | null;
  readonly friendRequestsSent?: (Friend | null)[] | null;
  readonly friendRequestsReceived?: (Friend | null)[] | null;
  readonly Notifications?: (Notification | null)[] | null;
  readonly state?: StatusUser | keyof typeof StatusUser | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly status?: string | null;
  readonly image?: string | null;
  readonly ChatRooms: AsyncCollection<UserChatRoom>;
  readonly Messages: AsyncCollection<Message>;
  readonly Likes: AsyncCollection<Like>;
  readonly Comments: AsyncCollection<Comment>;
  readonly Shares: AsyncCollection<Share>;
  readonly gender?: string | null;
  readonly birthday?: string | null;
  readonly friendRequestsSent: AsyncCollection<Friend>;
  readonly friendRequestsReceived: AsyncCollection<Friend>;
  readonly Notifications: AsyncCollection<Notification>;
  readonly state?: StatusUser | keyof typeof StatusUser | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerUserChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly chatRoomId?: string | null;
  readonly userId?: string | null;
  readonly chatRoom: ChatRoom;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly chatRoomId?: string | null;
  readonly userId?: string | null;
  readonly chatRoom: AsyncItem<ChatRoom>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerUserChatRoom : LazyUserChatRoom

export declare const UserChatRoom: (new (init: ModelInit<UserChatRoom>) => UserChatRoom) & {
  copyOf(source: UserChatRoom, mutator: (draft: MutableModel<UserChatRoom>) => MutableModel<UserChatRoom> | void): UserChatRoom;
}