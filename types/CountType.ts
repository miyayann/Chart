interface CountTypes {
  length: number;
  slice(itemsOffset: number, endOffset: number): unknown;
  date?: Date,
  id?: string,
  uid?: string,
  weight?: number,
}

export default CountTypes