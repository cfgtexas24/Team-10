using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace CodeForGoodAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class TestController
{
    private readonly BaseDbContext _context;

    public TestController(BaseDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public void Create()
    {
        var model = new TestModel { Name = "Test" };
        _context.TestModel.Add(model);
        _context.SaveChanges();
    }
}