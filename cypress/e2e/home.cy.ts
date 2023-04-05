describe("home page", () => {
beforeEach(() => {
  cy.visit('http://localhost:3000')
})

context("hero section",() => {
  it("the h1 contains the correct box", () => {
    cy.get("[data-test='hero-heading']")
      .contains("Testing Next.js Applications with Cypress")
  })

  it('the features on the homepage are correct', () => {
    cy.get("dt").eq(0).contains("4 Courses")
  })
})

context("Courses Section",() => {
  it("Course: Testing Your First Next.js Application",() => {
    cy.getByData("course-0").find("a").eq("3").click()
  })
})  
}) 

