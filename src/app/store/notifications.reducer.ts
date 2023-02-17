import { createReducer, on } from '@ngrx/store';
import { Notification } from './notification.model';
import { addNotification, clearAllNotifications, removeNotification } from './notifications.actions';

export const initialState: Notification[] = [
  {
    id: 'f9f62e62-326a-4e32-a2dd-89e1557bf579',
    createdAt: new Date(),
    message: 'initial',
  },
];

export const notificationsReducer = createReducer(
  initialState,
  on(addNotification, (state, action) => [action.notification, ...state]),
  on(clearAllNotifications, () => []),
  on(removeNotification, (state, { notification }) => {
    const i = state.findIndex((item) => item.id === notification.id);
    if (i < 0) return state;
    return [...state.slice(0, i), ...state.slice(i + 1)];
  })
);
