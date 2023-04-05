describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("Allows users to subscribe to the email list", () => {
        cy.getByData("email-input").type("uyuyzealia@gmail.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("uyuyzealia@gmail.com")
    })

    it("Doesn't allow an invalid email address", () => {
        cy.getByData("email-input").type("uyuyzealia")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })

    it("does NOT allow already subscribed email addresses", () => {
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message")
          .should("exist")
          .contains("already exists. Please use a different email address.")
      })
})