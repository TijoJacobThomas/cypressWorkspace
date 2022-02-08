/// <reference types ='cypress' />

describe('A11y testing',()=>{

    it('Sample A11y testing',()=>{

  
    cy.visit('https://demo.opencart.com/')
    cy.injectAxe()
   // cy.checkA11y()
    //cy.checkA11y('.input-group-btn > .btn')
    cy.checkA11y({
        exclude:  ['.input-group-btn > .btn']
    })
})
})