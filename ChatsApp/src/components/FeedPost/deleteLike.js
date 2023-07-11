export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      postID
      userID
      createdAt
      user {
        id
        name
        status
        image
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
