import { NotificationType } from 'src/app/constants';

export class ToastNotificationModel {
  code?: string;
  listMessages?: string[];
  message: string;
  title?: string;
  type?: NotificationType;
  isSelfClosing?: boolean;
}
