describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000');
    cy.get('.dashlink').click();
    cy.get('.dashboard').should('be.visible');
  });
});
