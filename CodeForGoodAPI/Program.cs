using CodeForGoodAPI;
using CodeForGoodAPI.Models;
using CodeForGoodAPI.Services.Patients;
using CodeForGoodAPI.Services.Employees;
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
#endregion

var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// sa account password: Password1!

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
