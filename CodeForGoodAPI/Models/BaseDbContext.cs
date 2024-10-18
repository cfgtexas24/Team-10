using Microsoft.EntityFrameworkCore;

namespace CodeForGoodAPI;

public class BaseDbContext : DbContext
{
    public string ConnectionString { get; set; }
    public BaseDbContext(DbContextOptions<BaseDbContext> options) : base(options) { }
    public DbSet<TestModel> TestModel { get; set; }

    // protected override void OnModelCreating(ModelBuilder modelBuilder)
    // {
    // }
}