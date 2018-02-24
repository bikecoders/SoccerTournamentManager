/**
 * All the primary elements used in this app are lists, lits of different types,
 * they have the same elements and methods.
 *
 * This class is a generic class to be inherited for the teams, players and technician staff services
 * to have a lot of methods already coded.
 */
export class CrudList<T> {

  /**
   * Array of the elements
   */
  protected elements: Array<T>;

  constructor() {
    this.elements = new Array<T>();
  }

  /**
   * Get the elements array
   */
  getElements(): Array<T> {
    return this.elements;
  }

  /**
   * Add a new element to the list
   *
   * @param newElement
   *        the new element to be added
   */
  newElement(newElement: T) {
    this.elements.push(newElement);
  }

  /**
   * Add a new element to the list
   *
   * @param index
   *        The index of the element to be edited
   *
   * @param editedElement
   *        The element edited
   */
  editElement(index: number, editedElement: T) {
    // If the index doesn't exist throw an error
    if (index > this.elements.length - 1) {
      throw new RangeError('Index doesn\'t exist');
    }

    this.elements[index] = editedElement;
  }

  /**
   * Delete the index of the element to be deleted
   *
   * @param index
   *         The index of the element to be edited
   *
   */
  deleteElement(index: number) {
    // If the index doesn't exist throw an error
    if (index > this.elements.length - 1) {
      throw new RangeError('Index doesn\'t exist');
    }

    this.elements.splice(index, 1);
  }
}
