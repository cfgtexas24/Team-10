using CodeForGoodAPI.Services.Patients;
using CodeForGoodAPI.Services.Patients.Dto;
using Microsoft.AspNetCore.Mvc;

namespace CodeForGoodAPI.Controllers;

// www.api.com/controller/method

[ApiController]
[Route("[controller]")]
public class PatientController
{
    private readonly IPatientService _patientService;

    public PatientController(IPatientService patientService)
    {
        _patientService = patientService;
    }
    // www.api.com/Patients/GetById
    [HttpGet("GetById/{id}")]
    public JsonResult GetById(int id)
    {
        var patient = _patientService.GetPatientById(id);
        if (patient == null)
        {
            return new JsonResult(new { success = false, message = "Patient not found." });
        }
        return new JsonResult(patient);
    }

    [HttpGet("GetAll")]
    public JsonResult GetAll()
    {
        return new JsonResult(_patientService.GetAllPatients());
    }

    [HttpPost("Create")]
    public JsonResult Create([FromBody] PatientDto patient)
    {
        var success = _patientService.CreatePatient(patient);
        return new JsonResult(new {success});
    }

    [HttpPost("Delete/{id}")]
    public JsonResult Delete(int id)
    {
        var success = _patientService.DeletePatientById(id);
        return new JsonResult(new {success});
    }
}