namespace Eventos.Api.Models
{
    public class Evento
    {
        public int Id { get; set; }
        public DateTime FechaEvento { get; set; }
        public string LugarEvento { get; set; }
        public string DescripcionEvento { get; set; }
        public decimal Precio { get; set; }
    }
}
