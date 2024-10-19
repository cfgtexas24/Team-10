using CodeForGoodAPI.Services.Accounts.Dto;
using Microsoft.EntityFrameworkCore;

namespace CodeForGoodAPI.Models;

[Index(nameof(Username), IsUnique = true)]
public class Account
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    // One of 'patient' | 'admin'
    public string? AccountType { get; set; }
    
    // Navigation props
    public ICollection<Feedback> Feedbacks { get; set; }

    public AccountDto ConvertToDto()
    {
        return new AccountDto
        {
            Id = Id,
            Username = Username,
            Password = Password,
            AccountType = AccountType
        };
    }
}