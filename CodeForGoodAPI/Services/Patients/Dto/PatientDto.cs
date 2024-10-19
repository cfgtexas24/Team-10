using CodeForGoodAPI.Models;

namespace CodeForGoodAPI.Services.Patients.Dto;

public class PatientDto
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string EmailAddress { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string Gender { get; set; }
    public string UserType { get; set; }

    public Patient ConvertToEntity()
    {
        return new Patient
        {
            Id = Id,
            FirstName = FirstName,
            LastName = LastName,
            EmailAddress = EmailAddress,
            DateOfBirth = DateOfBirth,
            Gender = Gender,
            UserType = UserType
        };
    }
}