export const listChatRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      ChatRooms {
        items {
          _version
          _deleted
          chatRoom {
            id
            updatedAt
            name
            image
            users {
              items {
                user {
                  id
                  image
                  name
                  gender
                  birthday
                }
              }
            }
            LastMessage {
              id
              createdAt
              text
            }
          }
        }
      }
    }
  }
`;
