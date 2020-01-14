import { getGreeting } from '../support/app.po';
import { getAddTodoButton, getTodos } from '../support/app.po';

describe('todos header', () => {
  beforeEach(() => cy.visit('/'));

  it('should display My Todos', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('My Todos');
  });
});

describe('TodoApps', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    getTodos().should(t => expect(t.length).equal(2));
    getAddTodoButton().click();
    getTodos().should(t => expect(t.length).equal(3));
  });
});
