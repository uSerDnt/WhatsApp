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
      gender
      birthday
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
