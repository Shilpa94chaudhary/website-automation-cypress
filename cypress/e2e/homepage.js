describe('Allen Coaching website homepage', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
    cy.visit('https://allen.in/');
  });

  it('Check URL', function () {
    cy.url().should('include', 'allen.in');
  });
});
