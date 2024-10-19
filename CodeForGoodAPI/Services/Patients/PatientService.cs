using CodeForGoodAPI.Models;
using CodeForGoodAPI.Services.Patients.Dto;

namespace CodeForGoodAPI.Services.Patients;

public class PatientService : IPatientService
{
    private readonly BaseDbContext _context;
    
    public PatientService(BaseDbContext context)
    {
        _context = context;
    }
    public PatientDto? GetPatientById(int id)
    {
        var patient = _context.Patients.FirstOrDefault(x => x.Id == id);
        if (patient == null)
        {
            return null;
        }
        
        return new PatientDto
        {
            Id = patient.Id,
            DateOfBirth = patient.DateOfBirth,
            EmailAddress = patient.EmailAddress,
            FirstName = patient.FirstName,
            LastName = patient.LastName,
            Gender = patient.Gender,
            Occupation = patient.Occupation,
        };
    }

    public List<PatientDto> GetAllPatients()
    {
        var patients = _context.Patients.ToList();
        return patients.Select(x => x.ConvertToDto()).ToList();
    }

    public bool CreatePatient(PatientDto patientDto)
    {
        _context.Patients.Add(patientDto.ConvertToEntity());
        _context.SaveChanges();
        return true;
    }

    public bool DeletePatientById(int id)
    {
        var patient = _context.Patients.FirstOrDefault(x => x.Id == id);
        if (patient == null)
        {
            return false;
        }
        _context.Patients.Remove(patient);
        _context.SaveChanges();
        return true;
    }
}