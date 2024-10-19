using CodeForGoodAPI.Services.Stories;
using CodeForGoodAPI.Services.Stories.Dto;
using Microsoft.AspNetCore.Mvc;

namespace CodeForGoodAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class StoryController
{
    private readonly IStoryService _storyService;

    public StoryController(IStoryService storyService)
    {
        _storyService = storyService;
    }

    [HttpGet("GetAll")]
    public JsonResult GetAll()
    {
        var stories = _storyService.GetAllStories();
        return new JsonResult(stories);
    }

    [HttpGet("GetById/{id}")]
    public JsonResult GetById(int id)
    {
        var story = _storyService.GetStoryById(id);
        if (story == null)
        {
            return new JsonResult(new { success = false, message = "Story not found." });
        }
        return new JsonResult(story);
    }

    [HttpPost("Create")]
    public JsonResult Create(StoryDto dto)
    {
        var success = _storyService.Create(dto);
        return new JsonResult(new {success});
    }

    [HttpPost("Delete")]
    public JsonResult Delete(int id)
    {
        var success = _storyService.Delete(id);
        return new JsonResult(new {success});
    }
}