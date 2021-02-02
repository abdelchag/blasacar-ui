import { FileDataModel } from './file-data-model';

export class FileUploadModel extends FileDataModel {
  titre?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
}
