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
    public JsonResult Login([FromBody] AccountDto dto)
    {
        var userLogin = _accountService.AccountLogin(dto.Username, dto.Password);

        if (userLogin == null)
        {
            return new JsonResult(new { success = false, message = "Username or password is incorrect." });
        }
        else
        {
            return new JsonResult(new { success = true, message = "" });
        }
    }

    [HttpPost("CreateAccount")]
    public JsonResult CreateAccount([FromBody] AccountDto accountDto)
    {
        var success = _accountService.CreateAccount(accountDto);
        return new JsonResult(new { success });
    }
}