using Microsoft.EntityFrameworkCore;

namespace CodeForGoodAPI.Models;

public class BaseDbContext : DbContext
{
    public BaseDbContext(DbContextOptions<BaseDbContext> options) : base(options) { }
    public DbSet<Patient> Patients { get; set; }
    public DbSet<Account> Accounts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        
    }
}