using Microsoft.EntityFrameworkCore;

namespace CodeForGoodAPI.Models;

public class BaseDbContext : DbContext
{
    public string ConnectionString { get; set; }
    public BaseDbContext(DbContextOptions<BaseDbContext> options) : base(options) { }
    public DbSet<Patient> Patients { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        
    }
}