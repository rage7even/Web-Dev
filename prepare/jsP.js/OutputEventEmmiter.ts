delete = new EventEmitter<number>();

onDelete() {
  this.delete.emit(this.student().id);
}
