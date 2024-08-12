using Eventos.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Eventos.Api.Context
{
    public class EventoContext : DbContext
    {
        public EventoContext(DbContextOptions<EventoContext> options)
            : base(options)
        {
        }

        public DbSet<Evento> Eventos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configura el mapeo para la entidad Evento
            modelBuilder.Entity<Evento>()
                .ToTable("Eventos") // Nombre de la tabla en la base de datos
                .HasKey(e => e.Id); // Define la clave primaria

            modelBuilder.Entity<Evento>()
                .Property(e => e.Precio)
                .HasColumnType("decimal(18,2)"); // Configura el tipo de columna para el decimal

            // Otras configuraciones si es necesario
        }
    }
}
