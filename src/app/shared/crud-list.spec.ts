import { CrudList } from './crud-list';

// Basic test
describe('Class CrudList Basic', () => {
  let list: CrudList<string>;

  beforeEach(() => { list = new CrudList<string>(); });

  it('should create an instance', () => {
    expect(list).toBeTruthy();
  });

  // Init State
  it('should not have any element', () => {
    expect(list.getElements().length).toBe(0);
  });

  // Add with empty
  it('should add a new element', () => {
    const newElement = 'I\'m new :)';

    const initialElementAmount = list.getElements().length;

    list.newElement(newElement);
    expect(list.getElements().length).toBe(initialElementAmount + 1, 'Length should increment in 1');
    expect(list.getElements()[list.getElements().length - 1]).toBe(newElement, 'Last element should be equal to new element added');
  });

});

// More complex test
describe('Class CrudList Edit/Delete', () => {
  let list: CrudList<string>;

  beforeEach(() => {
    list = new CrudList<string>();

    // Add a new elements
    list.newElement('I\'m new :)');
    list.newElement('newElement');
    list.newElement('another element');
    list.newElement('L\'arbre de l\'amitié');
    list.newElement('Woompy');
  });

  // Edit
  it('should EDIT an element by index', () => {
    const editedElement = 'I\'m edited :(';
    const indexToEdit = 2;

    // Edit element added at first
    list.editElement(indexToEdit, editedElement);

    // A simple edit
    expect(list.getElements()[indexToEdit]).toBe(editedElement, 'Should edit the element');

    // try to edit an element that doesn't exits
    expect(() => list.editElement(100000, 'what ever')).toThrow(new RangeError('Index doesn\'t exist'));
  });

  // Delete
  it('should DELETE an element by index', () => {
    const indexToDelete = 2;

    const initialElementAmount = list.getElements().length;
    const elementToDelete = list.getElements()[indexToDelete];

    // Edit element added at first
    list.deleteElement(indexToDelete);

    // Delete
    expect(list.getElements().length).toBe(initialElementAmount - 1, 'Length should decrement in 1');
    // try to delete an element that doesn't exits
    expect(() => list.deleteElement(100000)).toThrow(new RangeError('Index doesn\'t exist'));
  });

});
