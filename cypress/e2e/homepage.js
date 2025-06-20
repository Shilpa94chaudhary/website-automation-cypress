describe('Allen Coaching website homepage', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
    cy.visit('https://allen.in/');

    cy.fixture('uiText').then((data) => {
      this.header = data;
    });
  });

  it('Check URL', function () {
    cy.url().should('include', 'allen.in');
  });

  it('Check Allen logo', function () {
    // Using CSS path
    cy.get('[data-testid="onboardingAllenLogo"]')
      .should('be.visible')
      .and('have.attr', 'alt', 'Allen logo');
  });

  it('Check header tabs', function () {});

  it('Check navigation bar options', function () {
    cy.get('nav')
      .first()
      .find('ul.flex.h-full li.relative.mt-2')
      .each((ele, index) => {
        // cy.log(ele.text())
        cy.wrap(ele)
          .find('button[data-testid]')
          .invoke('text')
          .then((text) => {
            const expected = this.header.headerTabs[index];
            cy.log(text.trim());
            expect(text.trim()).to.eq(expected);
          });
      });
  });

  it('Check courses drop down values', function () {
    const courses = this.header.courses;
    cy.get('[data-testid="Courses"]').should('have.text', 'Courses');
    cy.get('[data-testid="Courses"]').trigger('mouseover');
    cy.wait(3000);
    cy.get('#headerTabDropDown')
      .first()
      .should('be.visible')
      .within(() => {
        courses.forEach((course) => {
          cy.contains(course).should('exist');
        });
      });
  });
});
