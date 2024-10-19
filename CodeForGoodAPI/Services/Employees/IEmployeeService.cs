using CodeForGoodAPI.Services.Employees.Dto;
namespace CodeForGoodAPI.Services.Employees;

public interface IEmployeeService
{
    public List<EmployeeDto> GetAllEmployees();
    public EmployeeDto? GetEmployeeById(int id);
    public bool CreateEmployee(EmployeeDto employee);
    public bool DeleteEmployee(int id);
}


