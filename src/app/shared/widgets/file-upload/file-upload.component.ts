import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

import { allowedContentType } from 'src/app/constants';
import { FileUploadModel } from 'src/app/shared/models/file-upload.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styles: []
})
export class FileUploadComponent implements OnInit {

  @Input() enableDeletion: boolean;
  @Input() allowedFileExtensions: Array<string> = [];

  @Output() fileUploaded = new EventEmitter<FileUploadModel>();
  @Output() filedRemoved = new EventEmitter<FileUploadModel>();

  private _fileUploadModel: FileUploadModel;

  get fileUploadModel() {
    return this._fileUploadModel;
  }

  @Input()
  set fileUploadModel(value: FileUploadModel) {
    this._fileUploadModel = value;
    this.hasContent = false;
  }

  maxSize = 5;
  fileName: string;
  fileSize: number;
  fileType: string;
  progress = 0;
  hasContent = false;
  dragAreaClass = 'dragarea';
  errors: Array<string> = [];
  fileReader = new FileReader();

  get errorMessage() {
    return `Votre fichier doit être au format ${this.allowedFileExtensions.join(', ')} et ne doit pas dépasser ${this.maxSize} Mo`;
  }

  get allowedExtensions() {
    return [].concat(...allowedContentType.map(contentType => '.' + contentType.extensions)).join(', ');
  }

  get showTitle() {
    return this.fileUploadModel ? this.fileUploadModel.titre && !this.hasContent : false;
  }

  ngOnInit() {
    if (this.allowedFileExtensions.length === 0) {
      this.allowedFileExtensions = [].concat(...allowedContentType
        .map(contentType => contentType.extensions))
        .map<string>(x => x.toUpperCase());
    }
  }

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const selectedFile = target.files[0];
    this.processFile(selectedFile);
  }

  resetFileEvent(event: any): void {
    if (event.target.value) {
      event.target.value = null;
    }
  }

  processFile(file: File) {
    this.processLoading(file);
  }

  processLoading(file: File) {

    if (!file) {
      return;
    }

    if (!this.isValidExtension(file)) {
      return;
    }

    if (!this.isValidSize(file)) {
      return;
    }

    this.fileReader.onload = (e) => {
      const fileData = (this.fileReader.result as string).split(',');
      this._fileUploadModel.fileName = this.fileName;
      this._fileUploadModel.fileSize = this.fileSize;
      this._fileUploadModel.data = fileData[1];
      this._fileUploadModel.fileType = this.fileType;
      this.fileUploaded.emit(this._fileUploadModel);
    };

    this.fileReader.onprogress = (event) => {
      if (event.lengthComputable) {
        this.setTimer();
      }
    };

    this.fileReader.readAsDataURL(file);
    this.hasContent = true;
    this.fileName = file.name;
    this.fileSize = file.size;
    this.fileType = file.type;
    this.errors = [];
  }

  removeFile() {
    this.hasContent = false;
    this.fileName = null;
    this.fileSize = null;
    this.fileType = null;
    this.progress = 0;
    this.errors = [];

    this._fileUploadModel.fileName = this.fileName;
    this._fileUploadModel.fileSize = this.fileSize;
    this._fileUploadModel.data = null;
    this._fileUploadModel.fileType = this.fileType;
    this.filedRemoved.emit(this._fileUploadModel);
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    this.dragAreaClass = 'droparea';
    event.preventDefault();
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(event: DragEvent) {
    this.dragAreaClass = 'droparea';
    event.preventDefault();
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event: DragEvent) {
    this.dragAreaClass = 'dragarea';
    event.preventDefault();
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    this.dragAreaClass = 'dragarea';
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    this.dragAreaClass = 'dragarea';
    event.preventDefault();
    event.stopPropagation();

    const droppedFile = event.dataTransfer.files[0];
    this.processFile(droppedFile);
  }

  protected isValidExtension(file: File): boolean {
    const extension = file.name.toUpperCase().split('.').pop() || file.name;

    if (this.allowedFileExtensions.some(x => x === extension)) {
      return true;
    }

    this.errors.push(this.errorMessage);
    return false;
  }

  protected isValidSize(file: File): boolean {
    const fileSizeinMB = file.size / (1024 * 1000);
    const size = Math.round(fileSizeinMB * 100) / 100;

    if (size > this.maxSize) {
      this.errors.push(this.errorMessage);
      return false;
    }

    return true;
  }

  private setTimer() {
    this.progress = 1;
    interval(3000).pipe(
      take(4)
    ).subscribe(() => this.timer());
  }

  timer(): any {
    if (this.progress !== 0) {
      this.progress = 100;
    }
  }

}

