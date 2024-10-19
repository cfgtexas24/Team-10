using CodeForGoodAPI.Models;

namespace CodeForGoodAPI.Services.Accounts.Dto;

public class AccountDto
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }

    public Account ConvertToEntity()
    {
        return new Account
        {
            Id = Id,
            Username = Username,
            Password = Password
        };
    }
}