using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace beeNearApi.Models
{
    public class Luggage
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public int NumberOfLuggages { get; set; }
        public DateTime CreatedAt { get; set; }
        public string AccessCode { get; set; }
        public int AmmountToPay { get; set; }
    }
}
