angular.module('app')
  .filter('city', () => {
    return (contacts, city) => {
      return contacts.filter(contact => {
        return contact.location.city == city
      })
    }
  })
