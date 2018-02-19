describe('View', () => {
  it('Updates hello world correctly when input changed', function () {
    cy.visit('http://localhost:1234/')
    cy.contains('Hello world')
    cy.get('input').type('Joe')
    cy.contains('Hello Joe')
  })

  it('Updates button text after pressed', function () {
    cy.visit('http://localhost:1234/')
    cy.contains('Click me').click()
    cy.contains('You clicked me!')
  })
})
