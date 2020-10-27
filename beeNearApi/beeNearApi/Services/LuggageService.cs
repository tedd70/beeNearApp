using beeNearApi.Models;
using beeNearApi.Repositories;
using beeNearApi.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace beeNearApi.Services
{
    public class LuggageService : ILuggageService
    {
        private readonly BeeNearDbContext _context;
        public LuggageService(BeeNearDbContext context)
        {
            _context = context;
        }

        public Luggage AddNewLuggage(Luggage luggage)
        {

            _context.Luggages.Add(luggage);
            _context.SaveChanges();

            return luggage;
        }

        public Luggage GetLuggage(string accessCode)
        {
            return _context.Luggages.FirstOrDefault(x => x.AccessCode == accessCode);
        }

        public int GetLuggagesCount()
        {
            return _context.Luggages.Sum(x=>x.NumberOfLuggages);
        }
    }
}
