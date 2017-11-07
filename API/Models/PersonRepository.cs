using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestApi1.Models
{

    public class PersonRepository: IPersonStore
    {        

        private List<Person> persons = new List<Person>();
        private int _nextId = 1;
        public PersonRepository()
        {
            Add(new Person { FirstName = "Aayushi", LastName = "Malhotra", JobTitle = "Senior Software Engineer" });
            Add(new Person { FirstName = "Nitin", LastName = "Malhotra", JobTitle = "Manager Technology" });
        }

        public Person Get(int id)
        {
            return persons.Find(p => p.Id == id);
        }

        public Person Add(Person person)
        {
            if (person == null)
            {
                throw new ArgumentNullException("person");
            }
            person.Id = _nextId++;
            persons.Add(person);
            return person;
        }

        public IEnumerable<Person> GetAllPersonData() {
            return persons;
        }

        public bool Update(Person person)
        {
            if (person == null)
            {
                throw new ArgumentNullException("person");
            }
            int index = persons.FindIndex(p => p.Id == person.Id);
            if (index == -1)
            {
                return false;
            }
            return true;
        }

    }

}