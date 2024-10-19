using System.ComponentModel.DataAnnotations;
using CodeForGoodAPI.Services.Patients.Dto;

namespace CodeForGoodAPI.Models;

public class Patient
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    [EmailAddress]
    public string EmailAddress { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string Gender { get; set; }
    public string Occupation { get; set; }
    public string Ethnicity { get; set; }
    public string Race { get; set; }
    public bool IsInsured { get; set; }

    public ICollection<AppointmentHistory> AppointmentHistories { get; set; }

    public PatientDto ConvertToDto()
    {
        return new PatientDto
        {
            Id = Id,
            FirstName = FirstName,
            LastName = LastName,
            EmailAddress = EmailAddress,
            DateOfBirth = DateOfBirth,
            Gender = Gender,
            Occupation = Occupation,
            Ethnicity = Ethnicity,
            Race = Race,
            IsInsured = IsInsured
        };
    }
}