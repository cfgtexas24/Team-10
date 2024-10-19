using CodeForGoodAPI.Models;
using CodeForGoodAPI.Services.Employees.Dto;

namespace CodeForGoodAPI.Services.Employees;

public class EmployeeService : IEmployeeService
{
    private readonly BaseDbContext _context;

    public EmployeeService(BaseDbContext context)
    {
        _context = context;
    }

    public EmployeeDto GetEmployeeById(int id)
    {
        var employee = _context.Employees.FirstOrDefault(x => x.Id == id);
        return new EmployeeDto
        {
            Id = employee.Id,
            FirstName = employee.FirstName,
            LastName = employee.LastName,
            EmployeeType = employee.EmployeeType
        };
    }

    public List<EmployeeDto> GetAllEmployees()
    {
        var employee = _context.Employees.ToList();
        return employee.Select(x => x.ConvertToDto()).ToList();
    }   

        public void CreateEmployee(EmployeeDto employeedto)
    {
        _context.Employees.Add(employeedto.ConvertToEntity());
        _context.SaveChanges();
    }

    public void DeleteEmployee(int id)
    {
        var employee = _context.Employees.FirstOrDefault(x => x.Id == id);
        _context.Employees.Remove(employee);
        _context.SaveChanges();
    }
}
