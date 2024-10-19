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
        return new JsonResult(story);
    }

    [HttpPost("Create")]
    public JsonResult Create(StoryDto dto)
    {
        _storyService.Create(dto);
        return new JsonResult(new {success = true});
    }
    
    
}