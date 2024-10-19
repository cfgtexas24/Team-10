using System.Security.Cryptography;
using CodeForGoodAPI.Models;
using CodeForGoodAPI.Services.Accounts.Dto;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Identity;

namespace CodeForGoodAPI.Services.Accounts;

public class AccountService : IAccountService
{
    private readonly BaseDbContext _context;
    private readonly PasswordHasher<object> _passwordHasher;

    public AccountService(BaseDbContext context)
    {
        _passwordHasher = new PasswordHasher<object>();
        _context = context;
    }
    
    public AccountDto? GetAccountById(int id)
    {
        var account = _context.Accounts.FirstOrDefault(a => a.Id == id);
        return account?.ConvertToDto();
    }

    public AccountDto? AccountLogin(string username, string password)
    {
        var account = _context.Accounts.FirstOrDefault(a => a.Username == username);
        if (account == null)
        {
            return null;
        }
        var result = _passwordHasher.VerifyHashedPassword(new object(), account.Password, password);
        return result == PasswordVerificationResult.Success ? account.ConvertToDto() : null;
    }

    public List<AccountDto> GetAllAccounts()
    {
        var accounts = _context.Accounts.ToList();
        return accounts.Select(x => x.ConvertToDto()).ToList();
    }

    public bool CreateAccount(AccountDto accountDto)
    {
        var account = accountDto.ConvertToEntity();
        
        var exists = _context.Accounts.Any(a => a.Username == account.Username);
        if (exists)
        {
            return false;
        }
        // 128-bit salt
        account.Password = HashPassword(account.Password);
        
        _context.Accounts.Add(account);
        _context.SaveChanges();

        return true;
    }

    public bool DeleteAccountById(int id)
    {
        var account = _context.Accounts.FirstOrDefault(a => a.Id == id);
        if (account == null)
        {
            return false;
        }
        
        _context.Accounts.Remove(account);
        _context.SaveChanges();
        return true;
    }

    public bool DeleteAccountByUsername(string username)
    {
        var account = _context.Accounts.FirstOrDefault(a => a.Username == username);
        if (account == null)
        {
            return false;
        }
        
        _context.Accounts.Remove(account);
        _context.SaveChanges();
        return true;
    }

    private string HashPassword(string password)
    {
        return _passwordHasher.HashPassword(new object(), password);
    }
}