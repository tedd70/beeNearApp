using beeNearApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace beeNearApi.Services.Interfaces
{
    public interface ILuggageService
    {
        Luggage AddNewLuggage(Luggage luggage);
        Luggage GetLuggage(string accessCode);
        int GetLuggagesCount();
    }
}
