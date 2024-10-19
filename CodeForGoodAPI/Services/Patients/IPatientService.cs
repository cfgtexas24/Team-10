using CodeForGoodAPI.Services.Patients.Dto;

namespace CodeForGoodAPI.Services.Patients;

public interface IPatientService
{
    public PatientDto? GetPatientById(int id);
    public List<PatientDto> GetAllPatients();
    public bool CreatePatient(PatientDto patient);
    public bool DeletePatientById(int id);
}