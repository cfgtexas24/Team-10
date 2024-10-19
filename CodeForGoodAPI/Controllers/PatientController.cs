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
        return new JsonResult(_patientService.GetPatientById(id));
    }

    [HttpGet("GetAll")]
    public JsonResult GetAll()
    {
        return new JsonResult(_patientService.GetAllPatients());
    }

    [HttpPost("Create")]
    public JsonResult Create(PatientDto patient)
    {
        _patientService.CreatePatient(patient);
        return new JsonResult(new {success = true});
    }

    [HttpPost("Delete/{id}")]
    public JsonResult Delete(int id)
    {
        _patientService.DeletePatientById(id);
        return new JsonResult(new {success = true});
    }
}