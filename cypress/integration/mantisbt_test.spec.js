/// <reference types="Cypress" />

describe('Sign up', () => {
    it('Base page', () => {
      cy.visit("http://www.mantisbt.org/bugs/my_view_page.php")
    })
    it('Go to Sign up page', ()=> {
        cy.get('[href="/bugs/signup_page.php"]').click()

    })
    it('Sign up', ()=> {
        cy.get('#username').type('Pavel')
        cy.get('#email-field').type('test@te.st')
    })
    //Не знаю как пройти капчу
  })

describe('Login', () => {
    it('Base page', () => {
      cy.visit("http://www.mantisbt.org/bugs/my_view_page.php")
    })
    it('Go to Login page', ()=> {
        cy.get('[href="/bugs/login_page.php?return=%2Fbugs%2Fmy_view_page.php"]').click()
    })
    it('Login page - username', ()=> {
        cy.get('#username')
            .click()
            .type('Test1991')
        cy.get('[type="submit"]').click()
    }) 
    it('Login page - password', ()=> {
        cy.get('#password')
            .click()
            .type('12345')
        cy.get('[type="submit"]').click()
    }) 
    it('Login done', ()=> {
        cy.get('.user-info').should('have.text', 'Test1991')
    }) 
  })

  describe('Create task', () => {
    it('Go to page Create task', () => {
        cy.contains('Создать задачу').click()
    })
    it('Go to page Chose project', () => {
        cy.get('[type="submit"]').click()
    })
    it('To fill inputs', () => {
        cy.get('[name="category_id"]').select('wiki')
        cy.get('[name="summary"]').type('Test')
        cy.get('[name="description"]').type('Some text')
        cy.get('[type="submit"]').submit()
    })
    it('Does not do much!', () => {
        cy.get('[href="bug_report_page.php"]').click()
    })
  })