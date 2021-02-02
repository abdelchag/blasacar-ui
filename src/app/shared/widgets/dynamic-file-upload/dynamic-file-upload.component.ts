import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FileUploadModel } from 'src/app/shared/models';

@Component({
  selector: 'app-dynamic-file-upload',
  templateUrl: './dynamic-file-upload.component.html',
  styles: []
})
export class DynamicFileUploadComponent implements OnInit {

  @Input() showChargementJustificatifs: boolean;

  @Input() maxPiecesJointes: number;

  @Input() maxSize: number;

  @Output() piecesJointesChanged = new EventEmitter<FileUploadModel[]>();

  errors: Array<string> = [];

  displayPiecesJointes: FileUploadModel[] = [new FileUploadModel()];

  get addedPiecesJointes(): FileUploadModel[] {
    return this.displayPiecesJointes.filter(f => f.data);
  }

  get totalSize(): number {
    if (!this.addedPiecesJointes.some(f => Boolean(f))) {
      return 0;
    }
    const totalinMb = this.addedPiecesJointes.map(f => f.fileSize).reduce((sum, size) => sum + size) / (1024 * 1000);
    return Math.round(totalinMb * 100) / 100;
  }

  constructor() { }

  ngOnInit() {
  }

  uploadFile(UploadedFile: FileUploadModel): void {
    if (this.displayPiecesJointes.filter(f => f.fileName === UploadedFile.fileName).length === 2) {
      this.removeFile(UploadedFile);
      this.errors.push(`Impossible d'ajouter la pièce jointe '${UploadedFile.fileName}'. Une pièce jointe avec même nom a déjà été ajouté.`);
      return;
    }
    if (this.totalSize > this.maxSize) {
      this.removeFile(UploadedFile);
      this.errors.push(`Impossible d'ajouter la pièce jointe '${UploadedFile.fileName}'. La taille totale de pièces jointes permise est ${this.maxSize} Mo.`);
      return;
    }
    if (this.addedPiecesJointes.length < this.maxPiecesJointes) {
      this.displayPiecesJointes = this.addedPiecesJointes;
      this.displayPiecesJointes.unshift(new FileUploadModel());
      this.onChange();
    }
  }

  removeFile(fileToRemove: FileUploadModel): void {
    this.displayPiecesJointes = this.addedPiecesJointes.filter(x => x !== fileToRemove);
    this.displayPiecesJointes.unshift(new FileUploadModel());
    this.onChange();
  }

  onRemoved(fileToRemove: FileUploadModel): void {
    this.removeFile(fileToRemove);
  }

  onChange(): void {
    this.errors.length = 0;
    this.piecesJointesChanged.emit(this.addedPiecesJointes);
  }
}
