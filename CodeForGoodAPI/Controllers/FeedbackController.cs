using CodeForGoodAPI.Models;
using CodeForGoodAPI.Services.Feedback;
using CodeForGoodAPI.Services.Feedback.Dto;
using Microsoft.AspNetCore.Mvc;

namespace CodeForGoodAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class FeedbackController
{
    private readonly IFeedbackService _feedbackService;

    public FeedbackController(IFeedbackService feedbackService)
    {
        _feedbackService = feedbackService;
    }

    [HttpGet("GetById/{id}")]
    public JsonResult GetById(int id)
    {
        var feedback = _feedbackService.GetFeedbackById(id);
        if (feedback == null)
        {
            return new JsonResult(new { success = false, message = "Feedback not found." });
        }

        return new JsonResult(feedback);
    }

    [HttpGet("GetAll")]
    public JsonResult GetAll()
    {
        var feedbacks = _feedbackService.GetAllFeedback();
        return new JsonResult(feedbacks);
    }

    [HttpGet("GetByUserId/{userId}")]
    public JsonResult GetByUserId(int userId)
    {
        var feedback = _feedbackService.GetFeedbackByUserId(userId);
        return new JsonResult(feedback);
    }

    [HttpPost("CreateFeedback")]
    public JsonResult CreateFeedback(FeedbackDto feedback)
    {
        var success = _feedbackService.CreateFeedback(feedback);
        return new JsonResult(new { success });
    }

    [HttpPost("DeleteFeedback/{id}")]
    public JsonResult DeleteFeedback(int id)
    {
        var success = _feedbackService.DeleteFeedback(id);
        return new JsonResult(new { success });
    }
}