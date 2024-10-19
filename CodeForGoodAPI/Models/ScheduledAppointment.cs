using CodeForGoodAPI.Services.ScheduledAppointments.Dto;

namespace CodeForGoodAPI.Models;

public class ScheduledAppointment
{
    public int Id { get; set; }
    public DateTime StartTime { get; set; }
    public string Reason { get; set; }

    public ScheduledAppointmentDto ConvertToDto()
    {
        return new ScheduledAppointmentDto
        {
            Id = Id,
            StartTime = StartTime,
            Reason = Reason
        };
    }
}