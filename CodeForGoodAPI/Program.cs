using CodeForGoodAPI;
using CodeForGoodAPI.Models;
using CodeForGoodAPI.Services.Accounts;
using CodeForGoodAPI.Services.Patients;
using CodeForGoodAPI.Services.Stories;
using CodeForGoodAPI.Services.StoryReplies;
using CodeForGoodAPI.Services.Employees;
using CodeForGoodAPI.Services.FAQPosts;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

string connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

#region Dependency Injection
builder.Services.AddDbContext<BaseDbContext>(options => options.UseSqlServer(connectionString));

builder.Services.AddScoped<IEmployeeService, EmployeeService>();
builder.Services.AddScoped<IPatientService, PatientService>();
builder.Services.AddScoped<IStoryService, StoryService>();
builder.Services.AddScoped<IStoryReplyService, StoryReplyService>();
builder.Services.AddScoped<IAccountService, AccountService>();
builder.Services.AddScoped<IFAQPostService, FAQPostService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});
#endregion

var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors("AllowAll");
}

// sa account password: Password1!

// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
