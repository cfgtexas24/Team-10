using CodeForGoodAPI.Models;
using CodeForGoodAPI.Services.AppointmentHistories.Dto;

namespace CodeForGoodAPI.Services.AppointmentHistories;

public class AppointmentHistoryService : IAppointmentHistoryService
{
    private readonly BaseDbContext _context;

    public AppointmentHistoryService(BaseDbContext context)
    {
        _context = context;
    }
    
    public AppointmentHistoryDto? GetAppointmentHistoryById(int id)
    {
        var appointment = _context.AppointmentHistories.FirstOrDefault(a => a.Id == id);
        if (appointment == null)
        {
            return null;
        }

        return appointment.ConvertToDto();
    }

    public List<AppointmentHistoryDto> GetPatientAppointmentHistories(int patientId)
    {
        var appointmentHistories = _context.AppointmentHistories.Where(a => a.PatientId == patientId).ToList();
        return appointmentHistories.Select(x => x.ConvertToDto()).ToList();
    }

    public List<AppointmentHistoryDto> GetAppointmentHistories()
    {
        var appointmentHistories = _context.AppointmentHistories.ToList();
        return appointmentHistories.Select(x => x.ConvertToDto()).ToList();
    }

    public bool AddAppointmentHistory(AppointmentHistoryDto appointmentHistory)
    {
        var appointmentHistoryEntity = appointmentHistory.ConvertToEntity();
        _context.AppointmentHistories.Add(appointmentHistoryEntity);
        _context.SaveChanges();
        return true;
    }

    public bool DeleteAppointmentHistory(int id)
    {
        var appointmentHistory = _context.AppointmentHistories.FirstOrDefault(a => a.Id == id);
        if (appointmentHistory == null)
        {
            return false;
        }
        
        _context.AppointmentHistories.Remove(appointmentHistory);
        _context.SaveChanges();
        return true;
    }
}