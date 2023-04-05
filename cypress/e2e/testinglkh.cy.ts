describe("home page", () => {
    beforeEach(() => {
      cy.visit('http://10.10.20.231:2020/sirup/')
    })
    
    it("Duplicate LKH for Today", () => {
      const today = Cypress.dayjs().format('YYYY-MM-DD');

        cy.get("[id='loginform-username']").type("uyuyks")
        cy.get("[id='loginform-password']").type("123456")
        cy.get("[name='login-button']").click()
        cy.get("[name='role']").select("User", {force: true})
        cy.get("[name='login-button']").click()
        cy.xpath("//a[.='Aplikasi']").click() 
        cy.xpath("//a[.='Laporan Kerja  .']").click()
        cy.xpath("//li[12]/ul[@class='nav treeview-menu']//a[contains(.,'Laporan Kerja')]").click()
        cy.xpath("//tr[@class='odd']//a[.='Duplikat']").click()
        cy.get("[id='w1']").type(today);
        cy.xpath("//button[@class='btn btn-success']").click()
    })
    }) 
    
      