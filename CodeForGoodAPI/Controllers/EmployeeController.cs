using CodeForGoodAPI.Services.Employees;
using CodeForGoodAPI.Services.Employees.Dto;
using Microsoft.AspNetCore.Mvc;

namespace CodeForGoodAPI.Controllers
{
    // www.api.com/controller/method

    [ApiController]
    [Route("[controller]")]
    public class EmployeeController
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        // www.api.com/Employees/GetById
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

        // www.api.com/Employees/GetAll
        [HttpGet("GetAll")]
        public JsonResult GetAll()
        {
            var employees = _employeeService.GetAllEmployees();
            return new JsonResult(employees);
        }

        // www.api.com/Employees/Create
        [HttpPost("Create")]
        public JsonResult Create(EmployeeDto employee)
        {
            if (employee == null)
            {
                return new JsonResult(new { success = false, message = "Invalid employee data." });
            }

            _employeeService.CreateEmployee(employee);
            return new JsonResult(new { success = true });
        }

        // www.api.com/Employees/Delete/{id}
        [HttpPost("Delete/{id}")]
        public JsonResult Delete(int id)
        {
            _employeeService.DeleteEmployee(id);
            return new JsonResult(new { success = true });
        }
    }
}
