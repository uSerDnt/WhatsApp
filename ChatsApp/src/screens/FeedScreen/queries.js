export const listShares = /* GraphQL */ `
  query ListShares(
    $filter: ModelShareFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShares(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Content
        createdAt
        post {
          id
          content
          createdAt
          image
          User {
            id
            name
            image
          }
        }
        user {
          id
          name
          image
        }
      }
      nextToken
      startedAt
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
