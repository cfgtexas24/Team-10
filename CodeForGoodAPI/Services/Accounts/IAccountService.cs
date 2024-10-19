using CodeForGoodAPI.Services.Accounts.Dto;

namespace CodeForGoodAPI.Services.Accounts;

public interface IAccountService
{
    public AccountDto? GetAccountById(int id);
    public AccountDto? AccountLogin(string username, string password);
    public List<AccountDto> GetAllAccounts();
    public bool CreateAccount(AccountDto accountDto);
    public bool DeleteAccountById(int id);
    public bool DeleteAccountByUsername(string username);
}