using CodeForGoodAPI.Services.Stories.Dto;
using CodeForGoodAPI.Services.StoryReplies;
using Microsoft.AspNetCore.Mvc;

namespace CodeForGoodAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class StoryReplyController
{
    private readonly IStoryReplyService _storyReplyService;

    public StoryReplyController(IStoryReplyService service)
    {
        _storyReplyService = service;
    }

    [HttpGet("GetStoryReplies/{storyId}")]
    public JsonResult GetStoryReplies(int storyId)
    {
        var replies =  _storyReplyService.GetStoryReplies(storyId);
        return new JsonResult(replies);
    }

    [HttpPost("Create")]
    public JsonResult CreateStoryReply(StoryReplyDto reply)
    {
        var success = _storyReplyService.AddStoryReply(reply);
        return new JsonResult(new { success });
    }

    [HttpPost("Delete/{id}")]
    public JsonResult Delete(int id)
    {
        var success = _storyReplyService.DeleteStoryReply(id);
        return new JsonResult(new { success });
    }
}