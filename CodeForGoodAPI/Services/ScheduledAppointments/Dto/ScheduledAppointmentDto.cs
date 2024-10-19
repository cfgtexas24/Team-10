using CodeForGoodAPI.Models;

namespace CodeForGoodAPI.Services.ScheduledAppointments.Dto;

public class ScheduledAppointmentDto
{
    public int Id { get; set; }
    public DateTime StartTime { get; set; }
    public string Reason { get; set; }

    public ScheduledAppointment ConvertToEntity()
    {
        return new ScheduledAppointment
        {
            Id = Id,
            StartTime = StartTime,
            Reason = Reason
        };
    }
}