using Microsoft.EntityFrameworkCore;

namespace CodeForGoodAPI.Models;

public class BaseDbContext : DbContext
{
    public BaseDbContext(DbContextOptions<BaseDbContext> options) : base(options) { }
    public DbSet<Patient> Patients { get; set; }
    public DbSet<Account> Accounts { get; set; }
    public DbSet<Story> Stories { get; set; }
    public DbSet<StoryReply> StoryReplies { get; set; }
    public DbSet<Employee> Employees { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Story>()
            .HasMany(e => e.Replies)
            .WithOne(e => e.Story)
            .HasForeignKey(e => e.StoryId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}