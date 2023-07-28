// File: amazon.spec.js
describe('Test Cases di Amazon', () => {
  it('Halaman Beranda Amazon: Berhasil memuat halaman beranda', () => {
    cy.visit('https://www.amazon.com/');
    cy.contains('Welcome to Amazon');
  });

  it('Halaman Beranda Amazon: Navigasi menu ke halaman Kategori', () => {
    cy.visit('https://www.amazon.com/');
    cy.get('#nav-hamburger-menu').click();
    cy.contains('Shop by Category');
  });

  it('Fitur Pencarian Produk di Amazon: Berhasil melakukan pencarian produk', () => {
    cy.visit('https://www.amazon.com/');
    cy.get('#twotabsearchtextbox').type('headphones');
    cy.get('.nav-search-submit').click();
    cy.contains('results for "headphones"');
  });
  it('Keranjang Belanja di Amazon: Berhasil menambahkan produk ke keranjang', () => {
    cy.visit('https://www.amazon.com/dp/B0123ABCD');
    cy.get('#add-to-cart-button').click();
    cy.contains('Added to Cart');
  });

  it('Keranjang Belanja di Amazon: Berhasil melihat detail produk di keranjang', () => {
    cy.visit('https://www.amazon.com/gp/cart/view.html');
    cy.contains('Headphones XYZ');
    cy.contains('$50.00');
  });

  it('Keranjang Belanja di Amazon: Berhasil menghapus produk dari keranjang', () => {
    cy.visit('https://www.amazon.com/gp/cart/view.html');
    cy.get('[data-action="delete"]').first().click();
    cy.contains('Cart is empty');
  });
});