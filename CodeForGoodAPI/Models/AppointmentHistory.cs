using CodeForGoodAPI.Services.AppointmentHistories.Dto;

namespace CodeForGoodAPI.Models;

public class AppointmentHistory
{
    public int Id { get; set; }
    public DateTime DateAttended { get; set; }
    public string ServiceType { get; set; }
    public int PatientId { get; set; }
    // TODO: Maybe add support for PDF file reports?
    // Navigation properties
    public Patient Patient { get; set; }

    public AppointmentHistoryDto ConvertToDto()
    {
        return new AppointmentHistoryDto
        {
            Id = Id,
            DateAttended = DateAttended,
            ServiceType = ServiceType,
            PatientId = PatientId,
        };
    }
}