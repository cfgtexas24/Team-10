using CodeForGoodAPI.Models;
using CodeForGoodAPI.Services.Patients.Dto;

namespace CodeForGoodAPI.Services.AppointmentHistories.Dto;

public class AppointmentHistoryDto
{
    public int Id { get; set; }
    public DateTime DateAttended { get; set; }
    public string ServiceType { get; set; }
    public int PatientId { get; set; }
    // TODO: Maybe add support for PDF file reports?

    public AppointmentHistory ConvertToEntity()
    {
        return new AppointmentHistory
        {
            Id = Id,
            DateAttended = DateAttended,
            ServiceType = ServiceType,
            PatientId = PatientId,
        };
    }
}