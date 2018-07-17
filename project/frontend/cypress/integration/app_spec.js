describe("Django REST framework / React quickstart app", () => {
const lead = {
	name: "Joe",
	email: "joe@fake.com",
	message: "a random message"
};
before(() => {
	cy.exec("npm run dev");
});
it("should be able to fill a web form", () => {
	cy.visit("/");
	cy
	.get('input[name="name"]')
	.type(lead.name)
	.should("have.value", lead.name);
	cy
	.get('input[name="email"]')
	.type(lead.email)
	.should("have.value", lead.email);
	cy
	.get('textarea[name="message"]')
	.type(lead.message)
	.should("have.value", lead.message);
	cy.get("form").submit();
it("should be able to see the table", () => {
	cy.visit("/");
	cy.get("tr").contains(`${lead.name}${lead.email}${lead.message}`);
});
});
// more tests here
});