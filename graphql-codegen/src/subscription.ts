import { gql } from 'apollo-angular';

export const getNotifications = gql`
  subscription notifications {
    notificationChanges {
      event
    }
  }
`;
