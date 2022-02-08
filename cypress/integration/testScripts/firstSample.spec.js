/// <reference types ='cypress' />








    it('Launch URL',()=>{
        cy.writeFile('empJSON file',
        {name :'Test', email : 'test@gmail.com'})
})

  it('Read from Json file',()=>{
      cy.readFile('userData.json')
      .its('username')
      .should('eq','toms')
  })

  it('Upload a file',()=>{

    cy.visit('/upload')
    cy.get('#file-upload').selectFile('sample.txt')
    cy.get('#file-submit').click()
  })

  it.only('Login',()=>{

    cy.visit('/login')
    cy.get('#username1').type(Cypress.env('username'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('.radius').click()
  })
