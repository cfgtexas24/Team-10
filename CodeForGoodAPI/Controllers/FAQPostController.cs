using CodeForGoodAPI.Services.FAQPosts;
using CodeForGoodAPI.Services.FAQPosts.Dto;
using Microsoft.AspNetCore.Mvc;

namespace CodeForGoodAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class FAQPostController
{
    private readonly IFAQPostService _faqPostService;

    public FAQPostController(IFAQPostService faqPostService)
    {
        _faqPostService = faqPostService;
    }

    [HttpGet("GetById/{id}")]
    public JsonResult GetById(int id)
    {
        var faqPost = _faqPostService.GetFAQPost(id);
        return new JsonResult(faqPost);
    }

    [HttpGet("GetAll")]
    public JsonResult GetAll()
    {
        var posts = _faqPostService.GetFAQPosts();
        return new JsonResult(posts);
    }

    [HttpPost("Add")]
    public JsonResult Add(FAQPostDto faqPost)
    {
        _faqPostService.CreateFAQPost(faqPost);
        return new JsonResult(new { success = true });
    }

    [HttpPost("Delete")]
    public JsonResult Delete(int id)
    {
        _faqPostService.DeleteFAQPost(id);
        return new JsonResult(new { success = true });
    }
}