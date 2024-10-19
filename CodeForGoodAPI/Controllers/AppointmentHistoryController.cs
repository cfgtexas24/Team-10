using CodeForGoodAPI.Models;
using CodeForGoodAPI.Services.AppointmentHistories;
using CodeForGoodAPI.Services.AppointmentHistories.Dto;
using Microsoft.AspNetCore.Mvc;

namespace CodeForGoodAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class AppointmentHistoryController
{
    private readonly IAppointmentHistoryService _appointmentHistoryService;

    public AppointmentHistoryController(IAppointmentHistoryService appointmentHistoryService)
    {
        _appointmentHistoryService = appointmentHistoryService;
    }

    [HttpGet("GetById/{id}")]
    public JsonResult GetById(int id)
    {
        var appointmentHistory = _appointmentHistoryService.GetAppointmentHistoryById(id);
        if (appointmentHistory == null)
        {
            return new JsonResult(new { success = false, message = "Appointment history not found." });
        }
        
        return new JsonResult(appointmentHistory);
    }

    [HttpGet("GetAllPatientHistory/{patientId}")]
    public JsonResult GetAllPatientHistory(int patientId)
    {
        var patientHistories = _appointmentHistoryService.GetPatientAppointmentHistories(patientId);
        return new JsonResult(patientHistories);
    }

    [HttpPost("AddAppointmentHistory")]
    public JsonResult AddAppointmentHistory([FromBody] AppointmentHistoryDto appointmentHistory)
    {
        var success = _appointmentHistoryService.AddAppointmentHistory(appointmentHistory);
        return new JsonResult(new {success});
    }

    [HttpPost("DeleteAppointmentHistory/{id}")]
    public JsonResult DeleteAppointmentHistory(int id)
    {
        var success = _appointmentHistoryService.DeleteAppointmentHistory(id);
        return new JsonResult(new {success});
    }
}