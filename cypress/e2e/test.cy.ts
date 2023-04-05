describe("home page", () => {
    beforeEach(() => {
      cy.visit('http://10.10.20.231:2020/sirup/')
    })
    
    it("Allows users Login to Super Admin", () => {
        cy.get("[id='loginform-username']").type("uyuyks")
        cy.get("[id='loginform-password']").type("123456")
        cy.get("[name='login-button']").click()
        cy.get("[name='role']").select("Super Admin", {force: true})
        cy.get("[name='login-button']").click()
    })
    }) 
    
     