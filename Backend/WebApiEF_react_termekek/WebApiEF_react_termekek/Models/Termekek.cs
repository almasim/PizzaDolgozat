using System;
using System.Collections.Generic;

#nullable disable

namespace WebApiEF_react_termekek.Models
{
    public partial class Termekek
    {
        public Termekek()
        {

        }

        public int Id { get; set; }
        public string Nev { get; set; }
        public string Leiras { get; set; }
        public int Ar { get; set; }
        public string Kep { get; set; }
    }
}
