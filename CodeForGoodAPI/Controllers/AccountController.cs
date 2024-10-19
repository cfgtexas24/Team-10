using CodeForGoodAPI.Services.Accounts;
using CodeForGoodAPI.Services.Accounts.Dto;
using Microsoft.AspNetCore.Mvc;

namespace CodeForGoodAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController
{
    private readonly IAccountService _accountService;

    public AccountController(IAccountService accountService)
    {
        _accountService = accountService;
    }

    [HttpPost("Login")]
    public JsonResult Login(string username, string password)
    {
        var userLogin = _accountService.AccountLogin(username, password);

        if (userLogin == null)
        {
            return new JsonResult(new { success = false, message = "Username or password is incorrect." });
        }
        else
        {
            return new JsonResult(new { success = true });
        }
    }

    [HttpPost("CreateAccount")]
    public JsonResult CreateAccount(AccountDto accountDto)
    {
        _accountService.CreateAccount(accountDto);
        return new JsonResult(new { success = true });
    }
}