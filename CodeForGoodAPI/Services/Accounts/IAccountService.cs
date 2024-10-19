using CodeForGoodAPI.Services.Accounts.Dto;

namespace CodeForGoodAPI.Services.Accounts;

public interface IAccountService
{
    public AccountDto GetAccountById(int id);
    public AccountDto? AccountLogin(string username, string password);
    public List<AccountDto> GetAllAccounts();
    public void CreateAccount(AccountDto accountDto);
    public void DeleteAccountById(int id);
}