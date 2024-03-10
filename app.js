"use strict";
class PhoneBook {
    constructor() {
        this.contacts = [];
    }
    addContact(name, phone) {
        const newContact = { name, phone };
        this.contacts.push(newContact);
        console.log(`Контакт ${name} добавлен в телефонную книжку.`);
    }
    findContactByName(name) {
        const foundContact = this.contacts.find(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
        if (foundContact) {
            console.log(`Номер телефона ${foundContact.name}: ${foundContact.phone}`);
        }
        else {
            console.log(`Контакт ненайден в книжке`);
        }
    }
    findContactByNumber(phone) {
        const foundContact = this.contacts.find(contact => contact.phone === phone);
        if (foundContact) {
            console.log(`Контак под номером телефона ${foundContact.phone}: ${foundContact.name}`);
        }
        else {
            console.log(`Телефеон ненайден в книжке`);
        }
    }
    deleteContact(name) {
        const foundContact = this.contacts.find(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
        const index = this.contacts.findIndex(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
        if (foundContact) {
            if (index !== -1) {
                this.contacts.splice(index, 1);
                console.log(`Контакт ${foundContact.name} удалён из телефонной книги`);
            }
        }
        else {
            console.log(`Контакт ${name} ненайден в книжке`);
        }
    }
}
const phoneBook = new PhoneBook();
phoneBook.addContact("Алиса", 123456789);
phoneBook.addContact("Варя", 987654321);
phoneBook.findContactByName("алиса");
phoneBook.findContactByName("ангелина");
phoneBook.findContactByNumber(987654321);
phoneBook.deleteContact("варя");
phoneBook.deleteContact("гена");
