using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HealthClinic.Models
{
    public class hireusm
    {
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string address { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zipcode { get; set; }
        public string homephone { get; set; }
        public string placeofemp { get; set; }
        public string empphone { get; set; }
        public string email { get; set; }
        public string license { get; set; }
        public DateTime dob { get; set; }
        public string preferedby { get; set; }
        public string country { get; set; }
        public string legalprb { get; set; }
        public string token { get; set; } 
        public List<Citations1> citations { get; set; }
    }
}