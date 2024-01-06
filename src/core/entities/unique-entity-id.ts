export class UniqueEntityID {
  private value: number

  toString() {
    return this.value
  }

  toValue() {
    return this.value
  }

  constructor(value: number) {
    this.value = value
  }

  public equals(id: UniqueEntityID) {
    return id.toValue() === this.value
  }
}
