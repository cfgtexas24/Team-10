using CodeForGoodAPI.Services.Accounts.Dto;
using Microsoft.EntityFrameworkCore;

namespace CodeForGoodAPI.Models;

[Index(nameof(Username), IsUnique = true)]
public class Account
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    
    // Navigation props
    public Patient? Patient { get; set; }
    public ICollection<Feedback> Feedbacks { get; set; }

    public AccountDto ConvertToDto()
    {
        return new AccountDto
        {
            Id = Id,
            Username = Username,
            Password = Password,
            Patient = Patient?.ConvertToDto()
        };
    }
}