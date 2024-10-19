using CodeForGoodAPI.Models;

namespace CodeForGoodAPI.Services.Employees.Dto;

public class EmployeeDto
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string EmployeeType { get; set; }

    public Employee ConvertToEntity()
    {
        return new Employee
        {
            Id = Id,
            FirstName = FirstName,
            LastName = LastName,
            EmployeeType = EmployeeType
        };
    }
}