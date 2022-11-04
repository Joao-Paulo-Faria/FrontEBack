using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_mySQL.Models
{
    [Table("estado")]
    public class Estado
    {
        [Key]
        [StringLength(2,MinimumLength =2,ErrorMessage ="O campo Sigla deve ter 2 caracteres")]
        public string? Sigla { get; set; }

        [Required(ErrorMessage = "O campo Nome é obrigatório")]
        [StringLength(200,MinimumLength =3,ErrorMessage =" O campo Nome deve ter entre 3 a 200 caracteres")]
        public string? Nome { get; set; }
    }
}
