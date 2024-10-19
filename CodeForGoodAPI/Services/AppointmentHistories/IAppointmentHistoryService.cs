using CodeForGoodAPI.Services.AppointmentHistories.Dto;

namespace CodeForGoodAPI.Services.AppointmentHistories;

public interface IAppointmentHistoryService
{
    public AppointmentHistoryDto? GetAppointmentHistoryById(int id);
    public List<AppointmentHistoryDto> GetPatientAppointmentHistories(int patientId);
    public bool AddAppointmentHistory(AppointmentHistoryDto appointmentHistory);
    public bool DeleteAppointmentHistory(int id);
}