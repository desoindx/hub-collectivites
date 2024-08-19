import {NotificationsMessage, NotificationsType} from "@/services/notificaction";

export type ResponseAction<T = {}> = {
  type?: NotificationsType;
  message?: NotificationsMessage;
} & T;
