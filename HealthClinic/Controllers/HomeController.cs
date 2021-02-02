using HealthClinic.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HealthClinic.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Messg()
        {
            string msg = (string)TempData["Message"]?? "Hey There!~/";
            ViewBag.Message = msg;
            return View();
        }
        [HttpPost]
        [ActionName("drivers-fleet-form")]
        public ActionResult fleetform(driverfleet df)
        {
            using (var context = new healthclinicEntities())
            {
                fleetservices flt = new fleetservices
                {
                    doyouearn = df.input_1,
                    cdllicense = df.input_2,
                    tt6=df.input_3,
                    recommend=df.input_4,
                    ywhynot=df.input_5,
                    fname=df.input_6_2_1,
                    lname=df.input_6_2_2,
                    addr=df.input_6_3_1,
                    addr1=df.input_6_3_2,
                    city=df.input_6_3_3,
                    C_state=df.input_6_3_4,
                    zip=df.input_6_3_5,
                    email=df.input_6_4,
                    phone=df.input_6_5,
                    company=df.input_6_6,
                    noofdrivers=int.Parse(df.input_7??"0"),
                    addfb=df.input_8,
                };
                context.fleetservices.Add(flt);
                context.SaveChanges();
            }
            TempData["Message"] = "You submission has been saved and being processed!~/professional-drivers-fleet.html";
            return RedirectToAction("messg");
        }
        [HttpPost]
        [ActionName("contact-form")]
        public ActionResult ContactForm(contact_form cf)
        {
            if (cf.input_9.ToString().Contains("1/1/0001"))
            {
                cf.input_9 = DateTime.Now;
            }
            if (cf.input_10.ToString().Contains("1/1/0001"))
            {
                cf.input_10 = DateTime.Now;
            }
            using (var context = new healthclinicEntities())
            {
                contactform frm = new contactform
                {
                    C_type = cf.input_1,
                    name = cf.input_2,
                    email = cf.input_3,
                    phone = cf.input_4,
                    fax = cf.input_5,
                    dlicense = cf.input_6,
                    tickethelp = cf.input_7,
                    citationno = cf.input_8,
                    citationdate = cf.input_9,
                    complydate = cf.input_10,
                    conticket = cf.input_11,
                    vcnumber = cf.input_12,
                    city = cf.input_13,
                    info = cf.input_15 ?? "" + cf.input_14 ?? "" 
                };
                context.contactform.Add(frm);
                context.SaveChanges();
            }
            TempData["Message"] = "You submission has been saved, We'll contact you back within 3 business days!~/contact.html";
            return RedirectToAction("messg");
        }
    }
}