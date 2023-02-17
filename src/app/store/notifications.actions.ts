import { createAction } from '@ngrx/store';
import { Notification } from './notification.model';

export const addNotification = createAction('[Notifications] Add', (notification: Notification) => ({ notification }));
export const clearAllNotifications = createAction('[Notifications] Clear All');
export const removeNotification = createAction('[Notifications] Remove One', (notification: Notification) => ({ notification }));
