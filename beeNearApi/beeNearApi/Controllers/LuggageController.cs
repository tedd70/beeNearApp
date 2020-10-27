using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using beeNearApi.Models;
using beeNearApi.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace beeNearApi.Controllers
{
    [ApiController]
    [Route("luggage")]
    public class LuggageController : ControllerBase
    {
        private ILuggageService _luggageService;
        private int _maxLuggages = 200;

        public LuggageController(ILuggageService luggageService)
        {
            _luggageService = luggageService;
        }

        [HttpPost]
        public IActionResult AddNewLuggage(Luggage luggage)
        {
            var luggagesCount = _luggageService.GetLuggagesCount();
            if (luggagesCount + luggage.NumberOfLuggages <= _maxLuggages)
            {
                luggage.CreatedAt = DateTime.Now;
                luggage.AccessCode = Regex.Replace(Convert.ToBase64String(Guid.NewGuid().ToByteArray()), "[/+=]", "");
                return Ok(_luggageService.AddNewLuggage(luggage));
            }

            return Conflict("Luggage limit exceeded !");
        }

        [HttpGet]
        [Route("LuggageCount")]
        public IActionResult GetCurrentLuggageCount()
        {
            return Ok(new { maxLuggages = _maxLuggages, currentCount = _luggageService.GetLuggagesCount() });
        }

        [HttpGet]
        [Route("GetLuggage")]
        public IActionResult GetLuggage(string accessCode)
        {
            var luggage = _luggageService.GetLuggage(accessCode);
            if (luggage != null)
            {
                var elapsedHours = (DateTime.Now - luggage.CreatedAt).TotalHours;
                luggage.AmmountToPay = 10;
                while (elapsedHours > 1)
                {
                    luggage.AmmountToPay += 5;
                    elapsedHours--;
                }
                return Ok(luggage);
            }
            else
            {
                return NotFound("Incorrect access code !");
            }
        }
    }
}
