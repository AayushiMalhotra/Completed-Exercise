using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TestApi1.Models;

namespace TestApi1.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PersonController : ApiController
    {
        public IPersonStore _ipersonstore = new PersonRepository();

        public PersonController()
        {

        }
      
        public IEnumerable<Person> GetAllPersons()
        {
            return _ipersonstore.GetAllPersonData();
        }


        public void PutPerson(Person person)
        {
            person.Id = 1;
            if (!_ipersonstore.Update(person))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }

    }
}
