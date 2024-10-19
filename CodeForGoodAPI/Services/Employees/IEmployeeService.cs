using CodeForGoodAPI.Services.Employees.Dto;
using System.Collections.Generic;
namespace CodeForGoodAPI.Services.Employees;

public interface IEmployeeService
{
    public List<EmployeeDto> GetAllEmployees();
    public EmployeeDto GetEmployeeById(int id);
    public void CreateEmployee(EmployeeDto employee);
    public void DeleteEmployee(int id);
}


