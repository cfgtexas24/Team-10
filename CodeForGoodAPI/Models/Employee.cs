using System.ComponentModel.DataAnnotations;
using CodeForGoodAPI.Services.Employees.Dto;

namespace CodeForGoodAPI.Models;

public class Employee
{
	public int Id { get; set; }
	public string EmployeeType { get; set; }

	public string FirstName { get; set; }
	public string LastName { get; set; }

	public EmployeeDto ConvertToDto()
	{
		return new EmployeeDto
		{
			Id = Id,
			FirstName = FirstName,
			LastName = LastName,
			EmployeeType = EmployeeType
		};
	}
}
