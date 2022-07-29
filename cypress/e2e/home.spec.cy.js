/// <reference types="cypress" />

const { it } = require("mocha");

context("Home Page", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("it should find home page", () => {
        cy.get("h3").contains("bulbasaur");
    })

    it("it should redirect to details page", () => {
        cy.xpath('//*[@id="__next"]/main/div[2]/div[1]/a').contains('Detalhes').click();
        cy.url().should('include', '/pokemon/1');
        cy.get('h2').contains('bulbasaur');
    })

    it("it should show 404 page if id be invalid", () => {
        cy.visit("/pokemon/0", {
            failOnStatusCode: false
        })

        cy.get('h1').contains('404');
        cy.get('h2').contains('This page could not be found.');
    })
})