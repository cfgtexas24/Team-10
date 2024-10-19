using CodeForGoodAPI.Services.Employees;
using CodeForGoodAPI.Services.Employees.Dto;
using Microsoft.AspNetCore.Mvc;

namespace CodeForGoodAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class EmployeeController
{
    private readonly IEmployeeService _employeeService;

    public EmployeeController(IEmployeeService employeeService)
    {
        _employeeService = employeeService;
    }

    [HttpGet("GetById/{id}")]
    public JsonResult GetById(int id)
    {
        var employee = _employeeService.GetEmployeeById(id);
        if (employee == null)
        {
            return new JsonResult(new { success = false, message = "Employee not found." });
        }
        return new JsonResult(employee);
    }

    [HttpGet("GetAll")]
    public JsonResult GetAll()
    {
        var employees = _employeeService.GetAllEmployees();
        return new JsonResult(employees);
    }

    [HttpPost("Create")]
    public JsonResult Create(EmployeeDto employee)
    {
        var success = _employeeService.CreateEmployee(employee);
        return new JsonResult(new { success });
    }

    [HttpPost("Delete/{id}")]
    public JsonResult Delete(int id)
    {
        var success = _employeeService.DeleteEmployee(id);
        return new JsonResult(new { success });
    }
}
