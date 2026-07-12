describe("Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("logs in with any non-empty username/password (mock login)", () => {
    cy.get('[data-cy="login-title"]')
      .should("be.visible")
      .and("contain.text", "Login");

    cy.get('[data-cy="username"]').type("testuser");
    cy.get('[data-cy="password"]').type("password123");
    cy.get('[data-cy="submit-login"]').click();

    cy.url().should("include", "/tasks");
  });

  it("shows an error if username/password are empty", () => {
    cy.get('[data-cy="submit-login"]').click();

    cy.contains("Please enter a username and password.")
      .should("be.visible");

    cy.url().should("include", "/login");
  });
});