using CodeForGoodAPI.Services.Patients.Dto;

namespace CodeForGoodAPI.Services.Patients;

public interface IPatientService
{
    public PatientDto GetPatientById(int id);
    public List<PatientDto> GetAllPatients();
    public void CreatePatient(PatientDto patient);
    public void DeletePatientById(int id);
}