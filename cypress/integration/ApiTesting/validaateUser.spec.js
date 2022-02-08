/// <reference types ='cypress' />

describe('Rest API Samples',() =>{
    const baseURL='https://jsonplaceholder.typicode.com/'
    it('Handle Get request',()=>{
        cy.request(baseURL.concat('users')).as('userResp')
        cy.get('@userResp').its('status').should('equals',200)
        
    })

    it('Get user Data',()=>{
        cy.request('GET','https://reqres.in/api/users').then((response)=>{
            expect(response.body.data[0].first_name).equal('George')
            expect(response.body.data).to.have.length(6)

            })
    })

    it('Create user',()=>{
        var userRec ={
            name : 'TestUser',
            job : 'Architect'
        }
        //Method 1 
        cy.request('POST','https://reqres.in/api/users',userRec).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).equal('TestUser')

        })
        //Methd 2
        cy.request('POST','https://reqres.in/api/users',userRec)
        .its('body')
        .should('include',{name :'TestUser'})
    })

    it('Update User',()=>{
        var user1 ={
            name :'Test User',
            job :'TestLead'

        }
        cy.request('PUT','https://reqres.in/api/users/2',user1).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).equal(user1.name)
            expect(response.body.job).equal(user1.job)

        })
    })

    it('Delete user',() =>{
        cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
            expect(response.status).equal(204)
        })
    })
})

