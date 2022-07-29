/// <reference types="cypress" />

context("Home Page", () => {
    beforeEach(() => {
        cy.visit("/pokemon/1")
    })

    it("it should find pokemon name", () => {
        cy.get("h2").contains("bulbasaur");
    })

    it("it should find pokemon id", () => {
        cy.xpath('//*[@id="__next"]/main/div/div[1]/h3').contains("#1");
    })

    it("it should find pokemon height and weight", () => {
        cy.get("h4").contains("Altura");
        cy.get("h4").contains("Peso");
    })
})