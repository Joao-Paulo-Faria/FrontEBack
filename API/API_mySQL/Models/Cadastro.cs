using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_mySQL.Models
{
    [Table("cadastro")]
    public class Cadastro
    {
        [Key]
        public int Codigo { get; set; }

        [Column("Nome")]
        public string? Nome { get; set; }

        [Column("Usuario")]
        public string? Usuario { get;set;}

        [Column("Senha")]
        public string? Senha { get; set; }
    }
}

