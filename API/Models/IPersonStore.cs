using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestApi1.Models
{
    public interface IPersonStore
    {
        IEnumerable<Person> GetAllPersonData();
        Person Get(int id);
        Person Add(Person item);       
        bool Update(Person item);
    }
}
